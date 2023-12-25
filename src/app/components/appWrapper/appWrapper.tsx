"use client"
import styled from "styled-components";
import { PropsWithChildren } from 'react';
import SettingsButton from "./settingsButton"

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  transition: 0.5s;
`

const AppWrapper = ({children} : PropsWithChildren) => {
  return (
    <StyledWrapper>
      <SettingButton />
      {children}
    </StyledWrapper>
  )
}

export default AppWrapper
