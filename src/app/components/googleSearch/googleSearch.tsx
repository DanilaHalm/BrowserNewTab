"use client"
import styled from "styled-components";
import Form from "./form/form";
import Input from "./input/input";

const GoogleSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const GoogleSearch = () => {

  const defineAction = (formData) => {
    "use server"
    return "https://google.com/search"
  }
  return (<GoogleSearchWrapper>
    <Form action={defineAction} method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
  </GoogleSearchWrapper>)
}

export default GoogleSearch
