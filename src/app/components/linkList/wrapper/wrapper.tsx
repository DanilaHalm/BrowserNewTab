"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react'

const StyledWrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3,1fr);
  width: clamp(300px, 90vw, 800px);
  color: white;
  font-size: 1rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  background: linear-gradient(145deg, #304c5a, #29404c);
  box-shadow: 5px 5px 10px #142026, -5px -5px 10px #466e82;
`

const Wrapper = ({children} : PropsWithChildren) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
