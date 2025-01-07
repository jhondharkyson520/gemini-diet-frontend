import { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

const SelectContainer = styled.select`
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

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

function SelectComponent({children, ...rest}: SelectProps) {
  return (
        <SelectContainer {...rest}>
            {children}
        </SelectContainer>
  )
}

export default SelectComponent;
