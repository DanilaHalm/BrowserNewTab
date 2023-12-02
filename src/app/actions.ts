"use server" 
import { redirect } from "next/navigation";
import { NextResponse } from 'next/server'
 

export const checkValidity = async (query: FormDataEntryValue | null) => {
    try {
      const response = await fetch(`https://${query}`) 
      return true
    }
    catch(error) {
      console.error(error)
      return false
    } 
  }

  
export const defineAction = async (formData: FormData) => {
    
    const query = formData.get("q");
    const isQueryValid = await checkValidity(query);
    if(isQueryValid) redirect(`https://${query}`)
    else {
      redirect(`https://google.com/search?q=${query}`)
    }
  }

export const searchOnGoogle = (formData: FormData) => {
    const query = formData.get("q");
    
    try {
      redirect(`htpps://${query}`)
    } catch (error) {
        redirect(`https://google.com/search?q=${query}`)
    }
}

