"use client";
//import {ChangeEvent} from "react";

interface IInputProps {
 // dfV: string;
  //onChange: React.Dispatch<React.SetStateAction<string>>
  //placeholder: string
  //value: string
  //onChange: (event: ChangeEvent<HTMLInputElement>) => void
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
  box-shadow: inset 20px -20px 60px #263c47, inset -20px 20px 60px #345261;

  &:focus {
    outline: none;
    color: white;
    font-size: 0.7rem;

    &::placeholder {
      opacity: 0.7;
    }

    &:autofill {
      color: white;
    }
    
    &:-webkit-autofill {
      color:white;
      -webkit-text-fill-color: white;
    }
  }

  &:autofill {
    color: white;
    box-shadow: inset 20px -20px 60px #263c47, inset -20px 20px 60px #345261;
    background: #2d4754;
  }
  &:-webkit-autofill {
    color:white;
    -webkit-text-fill-color: white;
    box-shadow: inset 20px -20px 60px #263c47, inset -20px 20px 60px #345261;
    background: #2d4754;
    
    &:focus {
      -webkit-text-fill-color: white;
      box-shadow: inset 20px -20px 60px #263c47, inset -20px 20px 60px #345261;
      background: #2d4754;
    }

    &:hover {
      -webkit-text-fill-color: white;
      box-shadow: inset 20px -20px 60px #263c47, inset -20px 20px 60px #345261;
      background: #2d4754;
    }
  }
  
  &::placeholder {
    color: white;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;
const Input = () => {
  return <StyledInput name="q" placeholder="Type URL or search on Google..." />;
};
export default Input;
