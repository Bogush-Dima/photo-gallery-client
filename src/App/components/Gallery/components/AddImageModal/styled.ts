import styled from "styled-components";
import { WrapperProps } from "./types";
import { Button, FormInput } from "../../../../main-styled-components";

export const Wrapper = styled.div`
  display: ${(props: WrapperProps) => (props.isAddImage ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgb(44 44 44 / 78%);
  cursor: pointer;
`;

export const Form = styled.form`
  width: 25rem;
  height: 30rem;
  background: #e6f2ff;
  border-radius: 0.7rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
`;

export const FileNameInput = styled(FormInput)`
  height: 7rem;
  text-align: center;
  padding: 0;
  padding-right: 0.2rem;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: none;
`;

export const SubmitButton = styled(Button)`
  position: inherit;
  margin-top: 0.6rem;
`;

export const ResetButton = styled(SubmitButton)`
  background: ${(props) => (props.disabled ? "gray" : "#b52323")};

  &:hover {
    cursor: ${props => props.disabled ? 'default' :  'pointer'};
    background: ${props => props.disabled ? 'gray' :  '#b52323ad'};
  }
`;
