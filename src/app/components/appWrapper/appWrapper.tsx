"use client"
import GoogleSearch from "../googleSearch/googleSearch";
import LinkList from "../linkList/linkList";
import Wrapper from "./wrapper/wrapper";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";

const AppWrapper = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper>
        <GoogleSearch />
        <LinkList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default AppWrapper
