import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";

const GoogleSearch = () => {

  const defineAction = (formData: FormData) => {
    "use server"
    return "https://google.com/search"
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
