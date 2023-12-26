"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react'

const StyledWrapper = styled.div`
  margin: 30px auto;
  padding: 0;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2,1fr);
  width: clamp(300px, 90vw, 800px);
  color: ${props => props.theme.color};
  font-size: 1rem;
  transition: 0.5s;
  border-radius: 8px;
`

const Wrapper = ({children} : PropsWithChildren) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
