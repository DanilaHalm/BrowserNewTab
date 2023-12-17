"use client";
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";
//import { useFormState } from "react-dom";

import { defineAction } from "@/app/actions";

const GoogleSearch = () => {
  //const initialState = {
   // value: "",
  //  link: ""
  //};
  //const [state, formAction] = useFormState(defineAction, initialState);
 // if(state?.link) redirect(state?.link, RedirectType.push)
  return (
    <Wrapper>
      <Form action={defineAction}>
        <Input />
      </Form>
    </Wrapper>
  );
};

export default GoogleSearch;
