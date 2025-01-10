import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 350px;
  height: 44px;
  background-color: #009AD6;
  border: none;
  color: #FFFFFF;
  border-radius: 8px;
  transition: 1s;

  &:hover{
    background-color: #0880af;
    transform: scale(1.05);
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({children, ...rest}: ButtonProps)  {

  return (
      <ButtonContainer {...rest}>
        {children}
      </ButtonContainer>
  )
}

export default Button;

