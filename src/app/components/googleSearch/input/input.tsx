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
  color: ${props => props.theme.color};
  font-size: 1rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  z-index: 1;
  background: ${props => props.theme.background};
  box-shadow: ${props => props.theme.boxshadow};
  animation: ${(props) =>
    props.$pending &&
    css`
      ${blink} 1s linear infinite
    `};

  &:hover {
    box-shadow: ${props => props.theme.hover.boxshadow};
  }

  &:focus {
    outline: none;
    background: ${props => props.theme.focus.background};
    box-shadow: ${props => props.theme.focus.boxshadow};
    color: ${props => props.theme.color};
    font-size: 1.1rem;

    &::placeholder {
      opacity: 0.7;
      font-size: 0.8rem;
    }
  }

  &::placeholder {
    color: ${props => props.theme.color};
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
