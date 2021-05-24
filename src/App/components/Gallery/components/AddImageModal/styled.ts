import styled from "styled-components";
import {WrapperProps} from "./types";

export const Wrapper = styled.div`
  display: ${(props: WrapperProps) => props.isAddImage ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(128, 128, 128, 0.29);
`

export const Form = styled.form`
  width: 50rem;
  height: 35rem;
  background: antiquewhite;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  background: #1f61a6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.7rem 1.2rem;
  min-width: 10rem;
  transition: 0.2s;
  text-align: center;

  &:hover {
    cursor: pointer;
    background: #1f61a6ab;
  }
`

export const Input = styled.input`
  display: none;
`