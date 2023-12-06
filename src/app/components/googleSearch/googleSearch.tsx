"use client"
import Form from "./form/form";
import StyledInput from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { useState, ChangeEvent } from "react";
import { defineAction, searchOnGoogle } from "@/app/actions";

const GoogleSearch = () => {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  return (
    <Wrapper>
      <Form action={searchOnGoogle} method="get" target="_blank">
        <StyledInput onChange={handleChange} value={inputValue} placeholder="Search on Google..."/>
      </Form>
    </Wrapper>
  )
}

export default GoogleSearch
