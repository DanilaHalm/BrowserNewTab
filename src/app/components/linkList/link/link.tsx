"use client"
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  background: red;
`

const LinkItem = () => {
  
  
  return (<Link prefetch href="#" passHref>
           <StyledLink>asdfg</StyledLink>
         </Link>)
}

export default LinkItem
