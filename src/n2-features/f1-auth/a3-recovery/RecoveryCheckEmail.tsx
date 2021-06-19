import React from "react";
import styled from "styled-components"
import mail from '../../../assets/images/Group 281.png'


export const RecoveryCheckEmail = () => {


    return (
        <>
            <RecoveryContainer>
                <FormContainer>
                    <ImgContent>
                    <ImgMail src={mail}/>
                    </ImgContent>
                    <TitleContainer>Check Email</TitleContainer>
                    <InputContainer>
                        <Content>
                            We’ve sent an Email with instructions to example@mail.com
                        </Content>
                    </InputContainer>
                </FormContainer>
            </RecoveryContainer>
        </>
    )
}


//styled-components

const RecoveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ErrorContainer = styled.div`
  margin-top: 30px;
  margin-left: 45px;
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 15px;
  color: #ef0f00;
  font-family: 'Popins', sans-serif;
`
const FormContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 413px;
  height: 540px;
  background: #F9F9FE;
  border-radius: 8px;`

const TitleContainer = styled.h3`
  display: flex;
  justify-content: center;
  font-family: 'Popins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #2D2E46;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`




const Content = styled.div`
  display: flex;
  width: 328px;
  height: 48px;
  left: 467px;
  //top: 330px;
  //margin-top: 30px;
  font-family: 'SF UI Display';
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #2D2E46;
  opacity: 0.5;
`

const ImgMail = styled.img`
    
`
const ImgContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`


