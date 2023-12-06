"use client"
import Form from "./form/form";
import StyledInput from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { useState, ChangeEvent } from "react";
import { defineAction, searchOnGoogle } from "@/app/actions";

const GoogleSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");
  
  const handleChange = (event) => {
    setInputValue(event.target.value)
    setText(JSON.stringify(event))
  }
  
  return (
    <Wrapper>
      <Form action={searchOnGoogle} method="get" target="_blank">
        <StyledInput onChange={(event)=>handleChange} value={inputValue} placeholder="Search on Google..."/>
      </Form>
      {text}
    </Wrapper>
  )
}

export default GoogleSearch
