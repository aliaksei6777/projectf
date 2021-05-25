import React from "react";
import styled from "styled-components"

const ProfileContainer = styled.div`
      display: flex;
      justify-content: center;
    `

export const Profile = () => {
    return (
        <ProfileContainer>
            <h3>Profile page</h3>
        </ProfileContainer>
    )
}