import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";

const GoogleSearch = () => {
  
  const defineAction = async (formData: FormData) => {
    "use server"
    
    const query = formData.get("q")
    redirect(`https://google.com/search?q=${query}`)
   // try {
    //  const response = await fetch(`https://${query}`)
    //  if(response.ok) redirect(`https://${query}`)
    //  else {
    //    redirect(`https://google.com/search?q=${query}`)
   //   }
  //  }
 //   catch(error) {
  //    console.error(error)
//    }
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
