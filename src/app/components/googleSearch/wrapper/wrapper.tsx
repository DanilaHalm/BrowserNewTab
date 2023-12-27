"use client";
import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = ({ children }: PropsWithChildren) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
