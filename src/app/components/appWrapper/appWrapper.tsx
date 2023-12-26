"use client"
import GoogleSearch from "../googleSearch/googleSearch";
import LinkList from "../linkList/linkList";
import Wrapper from "./wrapper/wrapper";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";

const AppWrapper = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
        <GoogleSearch />
        <LinkList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default AppWrapper
