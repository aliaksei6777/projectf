import React from "react";
import styled from "styled-components"
import {useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {UserDataType} from "../f1-auth/a1-login/auth-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";

const ProfileContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`

export const Profile = () => {
    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
    const profileData = useSelector<RootStateType, UserDataType | null>(state => state.auth.user)

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <ProfileContainer>
            <h3>Profile page</h3>
            <div>
                {profileData! && profileData.name}
            </div>
            <div>
                <img src={profileData! && profileData.avatar} alt="" width={'70px'}/>
            </div>
        </ProfileContainer>
    )
}