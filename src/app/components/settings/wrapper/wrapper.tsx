"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';

interface IWrapper extends PropsWithChildren {
  isActive: boolean
}

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  padding: 1rem;
  width: clamp(300px, 100vw, 800px);
  height: 100vh;
  right: ${props => props.$isActive ? "0" : "-100vw"};
  position: absolute;
  border-radius: 8px;
  z-index: 5;
  background: ${props => props.theme.background};
  transition: 0.5s;
  color: ${props => props.theme.color};
`

const Wrapper = ({ isActive, children } : IWrapper) => {
  return (
    <StyledWrapper $isActive={isActive}>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
