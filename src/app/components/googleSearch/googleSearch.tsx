"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { useState, ChangeEvent } from "react";
import { defineAction, searchOnGoogle } from "@/app/actions";

const GoogleSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  const checkPath = async(path?:string | undefined) => {
    if(path) {
      const response = fetch(path)
      return response
    } else {
      return 
    }
  }
  
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const domains: string[] = ["ru","com","by"]
    const newValue: string = "" || event?.target?.value;
    const dom = newValue.split(".").at(-1)
    
    if(domains.includes(dom)){
      const response = await checkPath(newValue)
      if(response?.ok){
        setText("true")
      } else {
        setText("false")
      }
    }
    
    setInputValue(newValue)
    //setText(JSON.stringify(event))
  }
  
  return (
    <Wrapper>
       <Form action={searchOnGoogle} method="get" target="_blank">
      <Input onChange={(event)=> handleChange(event)} value={inputValue} placeholder="Search on Google..."/>
      </Form>
   </Wrapper>
  )
}

export default GoogleSearch
