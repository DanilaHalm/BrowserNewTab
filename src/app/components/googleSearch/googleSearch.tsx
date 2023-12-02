"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { defineAction } from "@/app/actions";

const GoogleSearch = () => {

  return (
    <Wrapper>
      <Form action={defineAction} method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
    </Wrapper>
  )
}

export default GoogleSearch
