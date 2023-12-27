"use client";
import GoogleSearch from "../googleSearch/googleSearch";
import LinkList from "../linkList/linkList";
import Wrapper from "./wrapper/wrapper";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";
import { useState } from "react";
import ThemeContext from "./context";

const AppWrapper = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <ThemeProvider theme={currentTheme}>
        <Wrapper>
          <GoogleSearch />
          <LinkList />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppWrapper;
