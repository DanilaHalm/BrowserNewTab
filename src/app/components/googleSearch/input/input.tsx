"use client";
import { useFormStatus } from "react-dom";
import styled, { keyframes, css } from "styled-components";

const blink = keyframes`
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.1;
  }
  75% {
    opacity: 0.5;
  }
`;

const StyledInput = styled.input<{ $pending?: boolean }>`
  position: relative;
  width: clamp(300px, 90vw, 800px);
  height: 3rem;
  padding: 0 0 0 10px;
  color: white;
  font-size: 1rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  z-index: 1;
  background: linear-gradient(145deg, #304c5a, #29404c);
  box-shadow: 5px 5px 10px #142026, -5px -5px 10px #466e82;
  animation: ${(props) =>
    props.$pending &&
    css`
      ${blink} 1s linear infinite
    `};

  &:hover {
    box-shadow: 2px 2px 5px #7296a8, -2px 2px 5px #7296a8, -2px -2px 5px #7296a8, 2px -2px 5px #7296a8;
  }

  &:focus {
    outline: none;
    background: #2d4754;
    box-shadow: inset 5px 5px 10px #142026, inset -5px -5px 10px #466e82;
    color: white;
    font-size: 0.8rem;

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
`;

const Input = () => {
  const { pending } = useFormStatus();

  return <StyledInput $pending={pending} name="q" placeholder="Type URL or search on Google..." autoComplete="off" />;
};
export default Input;
