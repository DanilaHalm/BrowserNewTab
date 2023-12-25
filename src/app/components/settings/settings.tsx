"use client"
import Wrapper from "./wrapper/wrapper";
import SettingsButton from "../appWrapper/settingsButton";
import { useState } from "react";

const Settings = () => {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <>
      <SettingsButton isActive={isActive} setIsActive={setIsActive}/>
      <Wrapper isActive={isActive}>
      </Wrapper>
    </>
  )
}

export default Settings 
