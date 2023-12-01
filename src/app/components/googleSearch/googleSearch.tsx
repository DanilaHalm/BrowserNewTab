import Form from "./form/form";
import Input from "./input/input";

const GoogleSearch = () => {
  return (<>
    <Form action="https://google.com/search" method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
  </>)
}

export default GoogleSearch
