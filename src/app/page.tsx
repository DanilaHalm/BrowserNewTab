import Title from "./Title";
import Input from "./components/googleSearch/input/input";
import Form from "./components/googleSearch/form/form";
export default function Home() {
  return (
    <main>
      
      <Title> Hello </Title>
      <Form action="https://google.com/search" method="get" target="_blank">
        <Input name="q" type="search" placeholder="Search on Google..."/>
      </Form>
      </main>
  );
}
