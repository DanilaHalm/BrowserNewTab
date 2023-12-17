"use client";
import Form from "./form/form";
import Input from "./input/input";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

import { defineAction } from "@/app/actions";

const GoogleSearch = () => {
  const initialState = {
    value: "",
  };
  const [state, formAction] = useFormState(defineAction, initialState);

  return (
    <Wrapper>
      <Form action={formAction}>
        <Input dfV={state?.value} />
      </Form>
    </Wrapper>
  );
};

export default GoogleSearch;
