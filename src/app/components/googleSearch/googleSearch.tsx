"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { useState } from "react";
import { defineAction, searchOnGoogle } from "@/app/actions";

const GoogleSearch = () => {
  const [inputValue, setInputValue] = useState("");
  
  return (
    <Wrapper>
      <Form action={searchOnGoogle} method="get" target="_blank">
        <Input setInputValue={setInputValue} name="q" type="search" placeholder={ inputValue? inputValue : "Search on Google..."}/>
      </Form>
    </Wrapper>
  )
}

export default GoogleSearch
