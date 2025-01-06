import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputContainer = styled.input`
  width: 350px;
  height: 44px;
  background-color: #FFFFFF;
  border: none;
  color: #475569;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function InputComponent({...rest}: InputProps) {
  return (
      <InputContainer {...rest}/>
  )
}

export default InputComponent;
