"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';

const StyledWrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  z-index: 5;
  background: red;
`

const Wrapper = ({children} : PropsWithChildren) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
