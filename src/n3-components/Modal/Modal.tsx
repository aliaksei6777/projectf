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
                ? <ActiveModalContainerStyle>
                    <ActiveModalContentStyle onClick={e => e.stopPropagation()}>
                        {props.children}
                        <button onClick={() => props.setActive(false)}>Cancel</button>
                    </ActiveModalContentStyle>
                </ActiveModalContainerStyle>

                : <ModalContainerStyle>
                    <ModalContentStyle
                        onClick={e => e.stopPropagation()}>
                        {props.children}
                        <button onClick={() => props.setActive(false)}>Cancel</button>
                    </ModalContentStyle>
                </ModalContainerStyle>
            }
        </div>

    )

}


const ModalContainerStyle = styled.div`
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
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
  z-index: 99999;
`

const ActiveModalContainerStyle = styled(ModalContainerStyle)`
  opacity: 1;
  pointer-events: all;
`

const ModalContentStyle = styled.div`
  background-color: white;
  width: 350px;
  height: 400px;
  transform: scale(0.5);
  transition: 0.4s all;
@include flexable(center, center, row);
  display: flex;
  flex-direction: column;
  align-items: center;

`

const ActiveModalContentStyle = styled(ModalContentStyle)`
  transform: scale(1);
`