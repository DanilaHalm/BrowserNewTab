import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";

const GoogleSearch = () => {

  const defineAction = async (formData: FormData) => {
    "use server"
    const query = formData.get("q")
    try {
      const response = await fetch(`https://${query}`)
      if(response.ok) redirect(`https://${query}`)
      else {
        return false
      }
    }
    catch(error) {
      console.error(error)
    }
  }
  return (
    <Wrapper>
      <Form action={defineAction ? _ : "https://google.com/search"} method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
    </Wrapper>
  )
}

export default GoogleSearch
