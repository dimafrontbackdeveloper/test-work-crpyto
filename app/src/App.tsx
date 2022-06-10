import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Mint from './components/Mint/Mint';
import News from './components/News/News';
import { actions } from './store/actions/authActions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');

    if (isAuth === 'true') {
      dispatch(actions.setAuth(true));
    } else {
      dispatch(actions.setAuth(false));
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </div>
  );
}

export default App;
