import React from "react";
import styled, {keyframes} from "styled-components";

type ProgressBarTextPropsType = {};

export const ProgressBar: React.FC<ProgressBarTextPropsType> = () => {

    return <Progress>
        <ProgressBarStyled/>
    </Progress>
}

export default ProgressBar;

//styled-components

const Progress = styled.div`
  width: 100%;
  height: 6px;
  background: #ffffff;
  overflow: hidden;
`

const progressAnimation = keyframes`
  0% {
    background-position: 100%
  }
  100% {
    background-position: 0
  }
`

const ProgressBarStyled = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #689de5, #d49c90 57%, #6f6f6f 34%, #73f1a5 51%, #ffd33d 68%, #fa6e4f 85%, #b34bff);
  background-size: 300% 100%;
  animation: ${progressAnimation} 2s linear infinite;
`

