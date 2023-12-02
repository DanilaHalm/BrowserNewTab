import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";

const GoogleSearch = () => {

  const checkValidity = async (query: string) => {
    "use server"
    try {
      const response = await fetch(`https://${query}`) 
      return true
    }
    catch(error) {
      console.error(error)
      return false
    }
  }
  
  const defineAction = async (formData: FormData) => {
    "use server"
    
    const query = formData.get("q");
    const isQueryValid = await checkValidity(query);
    if(isQueryValid) redirect(`https://${query}`)
    else {
      redirect(`https://google.com/search?q=${query}`)
    }
  }
  
  return (
    <Wrapper>
      <Form action={defineAction} method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
    </Wrapper>
  )
}

export default GoogleSearch
