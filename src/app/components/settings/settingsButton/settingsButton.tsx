"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ThemeContext from "../../appWrapper/context";

interface ISettingsButton {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
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
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.boxshadow};
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.hover.boxshadow};
  }

  &:active {
    background: ${(props) => props.theme.focus.background};
    box-shadow: ${(props) => props.theme.focus.boxshadow};
  }
`;

const SettingsButton = ({ isActive, setIsActive }: ISettingsButton) => {
  const [currentTheme, _] = useContext(ThemeContext);
  const [settingsImage, setSettingsImage] = useState(currentTheme.settingsImage);

  useEffect(() => {
    setSettingsImage(isActive ? currentTheme.settingsXmarkImage : currentTheme.settingsImage);
  }, [currentTheme]);

  const handleSettings = () => {
    setIsActive(!isActive);
   // setSettingsImage(isActive ? currentTheme.settingsImage : currentTheme.settingsXmarkImage);
  };

  return (
    <StyledButton onClick={handleSettings}>
      <Image src={settingsImage} width={30} height={30} alt="Settings" />
    </StyledButton>
  );
};

export default SettingsButton;
