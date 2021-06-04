import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { getAuthUserDataTC } from '../../n2-features/f1-auth/a1-login/auth-reducer';
import {Header} from "./u2-header/Header";
import Routes from "./u3-routes/Routes";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, []);

  return (
    <div>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
