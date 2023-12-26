"use client"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import styled from "styled-components";
import { useTheme } from "styled-components";

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
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  box-shadow: ${props => props.theme.boxshadow};

  &hover {
    box-shadow: ${props => props.theme.hover.boxshadow};
  }
`

const StyledImage = styled(Image)`
  
`

const SettingsButton = ({ isActive, setIsActive } : ISettingsButton) => {
  const theme = useTheme()
  
  const handleSettings = () => {
    setIsActive(!isActive)
  }
  
  return (
    <StyledButton onClick={handleSettings} >
      <Image 
        src={theme.settingsImage}
        width={30}
        height={30}
        alt="Settings"
        />
    </StyledButton>
  )
}

export default SettingsButton
