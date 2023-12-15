"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";

import { defineAction } from "@/app/actions";

const GoogleSearch = () => {
  
  return (
    <Wrapper>
      <Form action={defineAction}>
        <Input />
      </Form>
   </Wrapper>
  )
}

export default GoogleSearch
