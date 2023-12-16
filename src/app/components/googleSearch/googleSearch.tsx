"use client"
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";
import { useFormState } from 'react-dom'

import { defineAction } from "@/app/actions";

const GoogleSearch = () => {
  const initialState: {value: string} = {
    value: "" 
  }
  const [state, formAction] = useFormState(defineAction, initialState);
  
  const x = false
  //action={x? "https://google.com/search" : () => redirect("https://google.com")}
  return (
    <Wrapper>
      <Form action={formAction} method="GET">
        <Input dfV={state?.value}/>
      </Form>
   </Wrapper>
  )
}

export default GoogleSearch
