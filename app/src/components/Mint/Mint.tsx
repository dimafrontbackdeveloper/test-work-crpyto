import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { actions } from '../../store/actions/mintActions/mintActions';
import { useAppSelector } from '../../store/hooks/hooks';
import detectEthereumProvider from '@metamask/detect-provider';

const Mint = () => {
  const dispatch = useDispatch();

  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const timeToUndesabled = useAppSelector((state) => state.mintReducer.timeToUndesabled);
  const maxCountOfClicked = useAppSelector((state) => state.mintReducer.maxCountOfClicked);
  const countOfClicked = useAppSelector((state) => state.mintReducer.countOfClicked);

  const [time, setTime] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    /* 
    если количество кликов максимальное, то мы ставим максималоное впемя
    в инных случаях, мы включаем таймер
    */
    if (countOfClicked === maxCountOfClicked) {
      setTime(() => timeToUndesabled);
    } else {
      const timer = setInterval(() => {
        setTime((prev) => {
          if (prev === timeToUndesabled) {
            clearInterval(timer);
            setIsDisabled(false);
            return prev;
          }

          return prev + 1;
        });
      }, 1000);

      return () => {
        setTime((prev) => {
          return prev;
        });
        clearInterval(timer);
      };
    }
  }, []);

  const setCountOfClicked = () => {
    dispatch(actions.plusCountOfClicked());
  };

  const requestAccount = async () => {
    console.log('requesting account...');

    // проверка есть кошелек
    const provider: any = await detectEthereumProvider();
    if (provider) {
      // если кошелек есть
      console.log('detected');

      try {
        const account = await provider.request({
          method: 'eth_requestAccounts',
        });

        localStorage.setItem('wallet', account);
        window.location.replace('/mint');
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('no detected');
    }
  };

  return (
    <div>
      {localStorage.getItem('wallet') ? (
        <div>
          {isAuth ? (
            <div>
              <div>{time}</div>
              <button
                className={`${(isDisabled || countOfClicked === maxCountOfClicked) && 'disabled'}`}
                onClick={setCountOfClicked}>
                Click
              </button>
              <div>{countOfClicked}</div>
            </div>
          ) : (
            <Navigate to="/login" />
          )}
        </div>
      ) : (
        <div>
          <button onClick={requestAccount}>Connect to Metamask</button>
        </div>
      )}
    </div>
  );
};

export default Mint;
