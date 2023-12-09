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
      
      const response = await fetch(`http://${inputValue}`)
     //  .then(res => res.status)
      // .then(status => setText(`${status}`))
      setText(JSON.stringify(response))
    } else {
      return 
    }
  }

  
  const see = async (event: ChangeEvent<HTMLInputElement>) => {
    const form = event?.target?.parentNode as HTMLFormElement
    const data = new FormData(form) 
    const newValue = event?.target?.value
    
    setInputValue(`${newValue}`)
    data.append("q", inputValue)
    const query = data.get("q")
    setText(`${query}`)
    try {
    const res = await fetch(`https://${query}`)
    setText(`${res.status}`)
    } catch(err){
      //setText("err")
    }
  }

  
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const domains: string[] = ["ru","com","by"]
    const newValue: string = "" || event?.target?.value;
    const dom = newValue.split(".").at(-1)

    //setInputValue(newValue)
    if(domains.includes(dom)){
      
      try {
        const response = await fetch(`https://vk.com`,{
         headers: {
           "Access-Control-Allow-Origin": "https://browser-new-tab.vercel.app/"
         }
        })
        setText(`${response.status}`)
        
      } catch(err) {
        console.error("false")
        setText("err")
      }
      
    } 
    
    setInputValue(newValue)
    //setText(JSON.stringify(event))
  }
  
  return (
    <Wrapper>
       <Form action={defineAction} method="get" target="_blank">
      <Input onChange={(event)=> see(event)} value={inputValue} placeholder="Search on Google..."/>
      </Form>
      {text}
   </Wrapper>
  )
}

export default GoogleSearch
