"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";

import { defineAction } from "@/app/actions";

const GoogleSearch = () => {
  const x = false
  return (
    <Wrapper>
      <Form action={x? "https://google.com/search" : () => redirect("https://google.com")} method="GET">
        <Input />
      </Form>
   </Wrapper>
  )
}

export default GoogleSearch
