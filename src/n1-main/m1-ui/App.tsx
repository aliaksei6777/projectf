import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getAuthUserDataTC } from '../../n2-features/f1-auth/a1-login/auth-reducer';
import { RootStateType } from '../m2-bll/store';
import {Header} from "./u2-header/Header";
import Routes from "./u3-routes/Routes";
import styled from "styled-components";

const App = () => {
    const status = useSelector<RootStateType, string>(state => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, []);

  return (
    <div>
      <Header/>
      <Routes/>
        {/*<LoaderStyleContainer>*/}
        {/*    {status === 'loading' ? <Preloader/> : null}*/}
        {/*</LoaderStyleContainer>*/}
    </div>
  );
}

export default App;


const LoaderStyleContainer = styled.div`
    display: flex;
    justify-content: center;
`