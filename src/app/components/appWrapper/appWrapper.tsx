"use client"
import GoogleSearch from "../googleSearch/googleSearch";
import LinkList from "../linkList/linkList";
import Wrapper from "./wrapper/wrapper";

const AppWrapper = () => {
  return (
      <Wrapper>
        <GoogleSearch />
        <LinkList />
      </Wrapper>
  );
}

export default AppWrapper
