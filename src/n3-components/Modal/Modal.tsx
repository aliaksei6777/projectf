import React from 'react';
import styled from "styled-components";


type ModalType = {
    active: boolean
    setActive: Function
    children: React.ReactNode
}

export const HiringModal = (props: ModalType) => {
    return (
        <div>
            {props.active
            && <ActiveModalContainerStyle>
                <ActiveModalContentStyle>
                    {props.children}
                    <ButtonCancelStyle onClick={() => props.setActive(false)}>Cancel</ButtonCancelStyle>
                </ActiveModalContentStyle>
            </ActiveModalContainerStyle>
            }
        </div>

    )

}


const ActiveModalContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
@include flexable(center, center, row);
  transition: 0.5s;
  z-index: 99999;
  opacity: 1;
  pointer-events: all;
`

const ActiveModalContentStyle = styled.div`
  background-color: #F9F9FE;
  width: 350px;
  height: 250px;
  transition: 0.4s all;
@include flexable(center, center, row);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1);
  border-radius: 2px;
  position: relative;
`

const ButtonCancelStyle = styled.button`
  position: absolute;
  top: 200px;
  left: 30px;
`