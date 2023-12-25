"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';

const StyledWrapper = styled.div`
  width: clamp(300px, 100vw, 800px);
  position: absolute;
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
