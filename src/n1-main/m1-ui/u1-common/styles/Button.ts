import styled from "styled-components"


export const StyledButton = styled.button`
  margin-left: auto;
  padding: 2px;
  color: indianred;
  cursor: pointer;
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  outline: 1px solid;
  outline-offset: 0px;
  text-shadow: none;
  border: 0 solid;
  &:hover {
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 7px;
  }
`