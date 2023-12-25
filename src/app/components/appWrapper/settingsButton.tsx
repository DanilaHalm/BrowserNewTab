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
  margin-left: auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
