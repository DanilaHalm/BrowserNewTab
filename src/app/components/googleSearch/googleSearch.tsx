"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { useState, ChangeEvent } from "react";
import { defineAction, searchOnGoogle } from "@/app/actions";

const GoogleSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    setInputValue(event.target.value)
    //setText(JSON.stringify(event))
  }
  
  return (
   // <Wrapper>
     // <Form action={searchOnGoogle} method="get" target="_blank">
       // <input type="search" onChange={(event) => handleChange(event)} value={inputValue} name="q" />
       <Input onChange={(event)=> handleChange(event)} value={inputValue} placeholder="Search on Google..."/>
    //</Form>
     
   // </Wrapper>
  )
}

export default GoogleSearch
