"use client";
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import styled, { keyframes } from "styled-components";

import { defineAction } from "@/app/actions";

const glow = keyframes`
  50% {
    opacity: 1;
    transform: scale(1.1); 
  }
`;

const DivS = styled.div`
  width: clamp(300px, 90vw, 800px);
  height: 3rem;
  position: absolute;
  z-index: 5;
  &:hover {
    &::after {
      animation: ${glow} 1s linear infinite;
    }
  }

  &::after {
    content: "";
    width: clamp(300px, 90vw, 800px);
    padding: 0 0 0 10px;
    position: absolute;
    display: block;
    height: 3rem;
    border-radius: 8px;
    opacity: 0;
    box-shadow: 5px 5px 10px #ffffff, -5px 5px 10px #ffffff, -5px -5px 10px #ffffff, 5px -5px 10px #ffffff;

    &:hover {
      animation: ${glow} 1s linear infinite;
    }
  }
`;

const GoogleSearch = () => {
  return (
    <Wrapper>
      <Form action={defineAction}>
        <Input />
      </Form>
    </Wrapper>
  );
};

export default GoogleSearch;
