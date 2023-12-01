"use client"
import styled from "styled-components";
import Form from "./form/form";
import Input from "./input/input";

const GoogleSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
  width: 100vw;
`

const GoogleSearch = () => {
  return (<GoogleSearchWrapper>
    <Form action="https://google.com/search" method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
  </GoogleSearchWrapper>)
}

export default GoogleSearch
