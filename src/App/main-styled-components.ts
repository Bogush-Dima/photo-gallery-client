import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  };
  
  body {
    background: #cce4ff;
    z-index: 1;
  };
  
  li {
    list-style: none;
  }
`

export const Title = styled.h1`
  color: #4d9bf2;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormTitle = styled.h1`
  color: #4d9bf2;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #cce4ff;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: #090963;
  outline: none;

  &:last-of-type {
    margin-bottom: 2rem;
  }
  
  &::placeholder {
    color: #4d9bf2;
  }
`

export const FormButton = styled.button`
  background: ${props => props.disabled ? 'gray' :  '#1f61a6'};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.7rem 1.2rem;
  min-width: 10rem;
  transition: 0.2s;
  
  &:hover {
    cursor: ${props => props.disabled ? 'default' :  'pointer'};
    background: ${props => props.disabled ? 'gray' :  '#1f61a6ab'};
  }
`

export const Button = styled(FormButton)`
  position: absolute;
  right: 3rem;
  top: 1.5rem;
`