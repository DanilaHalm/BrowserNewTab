"use client"

import styled from "styled-components";

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 8px;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SettingsButton = () => {
  return (
    <StyledButton>{"Ss"}</StyledButton>
  )
}

export default SettingsButton
