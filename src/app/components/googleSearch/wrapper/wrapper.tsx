"use client"
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`

interface IWrapper {
  children?: ReactNode
}

const Wrapper = (props: IWrapper) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
