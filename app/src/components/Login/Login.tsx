import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FormEvent } from 'react';
import { actions } from '../../store/actions/authActions/authActions';
import { useAppSelector } from '../../store/hooks/hooks';

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const checkoutData = (e: FormEvent) => {
    e.preventDefault();

    if (userName === 'Admin' && password === '12345') {
      localStorage.setItem('isAuth', 'true');
      dispatch(actions.setAuth(true));
    } else {
      alert('Имя пользователя или пароль введены неверно ');
    }
  };

  return (
    <>
      {isAuth ? (
        <Navigate to="/mint" />
      ) : (
        <form>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" onClick={checkoutData} value="отправить" />
        </form>
      )}
    </>
  );
};

export default Login;
