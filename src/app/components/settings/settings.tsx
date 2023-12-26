"use client"
import Wrapper from "./wrapper/wrapper";
import SettingsButton from "../appWrapper/settingsButton";
import ThemeSwitcher from "./themeSwitcher/themeSwitcher";
import { useState } from "react";

const Settings = () => {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <>
      <SettingsButton isActive={isActive} setIsActive={setIsActive}/>
      <Wrapper isActive={isActive}>
        <ThemeSwitcher />
      </Wrapper>
    </>
  )
}

export default Settings 
