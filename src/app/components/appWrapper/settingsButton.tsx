"use client"
import { Dispatch, SetStateAction } from "react"
import styled from "styled-components";

interface ISettingsButton {
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 8px;
  margin: 1rem 1rem 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background};
  box-shadow: ${props => props.theme.boxshadow};

  &hover {
    box-shadow: ${props => props.theme.hover.boxshadow};
  }
`

const SettingsButton = ({ isActive, setIsActive } : ISettingsButton) => {
  const handleSettings = () => {
    setIsActive(!isActive)
  }
  
  return (
    <StyledButton onClick={handleSettings} >{"Ss"}</StyledButton>
  )
}

export default SettingsButton
