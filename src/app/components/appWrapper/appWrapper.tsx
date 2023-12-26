"use client"
import GoogleSearch from "../googleSearch/googleSearch";
import LinkList from "../linkList/linkList";
import Wrapper from "./wrapper/wrapper";
import { ThemeProvider } from "styled-components";

const AppWrapper = () => {
  return (
    <ThemeProvider theme={{color:"red"}}>
      <Wrapper>
        <GoogleSearch />
        <LinkList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default AppWrapper
