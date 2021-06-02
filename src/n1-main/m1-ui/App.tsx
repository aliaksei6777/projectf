import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getAuthUserDataTC } from '../../n2-features/f1-auth/a1-login/auth-reducer';
import Preloader from '../../n3-components/Preloader/Preloader';
import { RootStateType } from '../m2-bll/store';
import {Header} from "./u2-header/Header";
import Routes from "./u3-routes/Routes";

const App = () => {
    const status = useSelector<RootStateType, string>(state => state.app.status)
    // const error = useSelector<RootStateType, string | null>(state => state.app.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, []);

  return (
    <div>
        <div>
            {status === 'loading' ? <Preloader/> : null}
        </div>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
