"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';

interface IWrapper extends PropsWithChildren {
  isActive: boolean
}

const StyledWrapper = styled.div`
  width: clamp(300px, 100vw, 800px);
  height: 100vh;
  right: -100vw;
  position: absolute;
  z-index: 5;
  background: red;
`

const Wrapper = ({ isActive, children } : IWrapper) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
