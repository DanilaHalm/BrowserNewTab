"use client";

interface InputProps {
  setInputValue: ChangeEventHandler<HTMLInputElement>
  placeholder: string
}

import styled from "styled-components";

const StyledInput = styled.input`
  width: clamp(300px, 90vw, 800px);
  height: 3rem;
  padding: 0 0 0 10px;
  color: white;
  font-size: 1rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  background: #2d4754;
  box-shadow: inset 20px -20px 60px #263c47,
              inset -20px 20px 60px #345261;
  
  &:focus {
    outline: none;
    font-size: 0.7rem;

    &::placeholder {
      opacity: 0.7;
    }
  }

  &::placeholder {
    color: white;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`
const Input: React.FC<InputProps> = ({ placeholder, setInputValue}) => {
  return (
    <StyledInput onChange={setInputValue} placeholder={placeholder} />
  )
}
export default Input
