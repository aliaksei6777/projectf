import React, {useState} from "react";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {updateUserDataTC, UserDataType} from "../f1-auth/a1-login/auth-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";
import {useForm} from 'react-hook-form';


const ProfileContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`

export const Profile = () => {
    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
    const profileData = useSelector<RootStateType, UserDataType | null>(state => state.auth.user)

    const [editMode, setEditMode] = useState<boolean>(false)

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmitHandler = (data: { name: string }, e: any) => {
        dispatch(updateUserDataTC(data.name, ''))
        setEditMode(false)
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <ProfileContainer>
            <h3>Profile page</h3>
            <div>
                {editMode
                        ? <form  onSubmit={handleSubmit(onSubmitHandler)}>
                                <input
                                       type="text"
                                       placeholder={'Enter new name'}
                                       autoFocus
                                       {...register("name",{required: true,
                                           validate: value => value.length >= 2})}
                                />
                                <button>Save</button>
                                <button onClick={() => setEditMode(false)}>Cancel</button>
                            </form>
                        : <div >
                                <span>{profileData && profileData.name} </span>
                                <button onClick={() => setEditMode(true)}
                                >Edit Name</button>
                        </div>
                }
            </div>
            <div>
                <img src={profileData! && profileData.avatar} alt="" width={'70px'}/>
            </div>
            <div>
                <span>Total packs: </span>
                <span>{profileData && profileData.publicCardPacksCount}</span>

            </div>
            <div>
                {errors.name && 'Name is required more than 2 letters'}
            </div>
        </ProfileContainer>
    )
}