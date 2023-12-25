"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';

interface IWrapper extends PropsWithChildren {
  isActive: boolean
}

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  width: clamp(300px, 100vw, 800px);
  height: 100vh;
  right: ${props => props.$isActive ? "0" : "-100vw"};
  position: absolute;
  z-index: 5;
  background: red;
`

const Wrapper = ({ isActive, children } : IWrapper) => {
  return (
    <StyledWrapper $isActive={isActive}>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
