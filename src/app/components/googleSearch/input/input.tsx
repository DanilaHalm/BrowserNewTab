"use client";
import styled from "styled-components";

const Input = styled.input`
  width: clamp(300px, 90vw, 800px);
  height: 3rem;
  padding: 0 0 0 10px;
  color: white;
  border: none;
  border-radius: 8px;
  background: #2d4754;
  box-shadow: inset 20px -20px 60px #263c47,
              inset -20px 20px 60px #345261;

  &:focus {
    outline: none;
    font-size: 1rem;

    &::placeholder {
      color: wheat;
    }
  }

  &::placeholder {
    color: white;
  }
  
`

export default Input
