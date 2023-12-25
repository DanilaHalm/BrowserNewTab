"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';
//import SettingsButton from "./settingsButton"
import Settings from "../settings/settings";

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
`

const AppWrapper = ({children} : PropsWithChildren) => {
  return (
    <StyledWrapper>
      <Settings />
      {children}
    </StyledWrapper>
  )
}

export default AppWrapper
