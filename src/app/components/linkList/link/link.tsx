"use client"
import styled from "styled-components";
import Link as NextLink from "next/link";

const StyledLink = styled.a`
  background: red;
`

const Link = () => {
  
  
  return (<NextLink prefetch href="#" passHref>
           <StyledLink>asdfg</StyledLink>
         </NextLink>)
}

export default Link
