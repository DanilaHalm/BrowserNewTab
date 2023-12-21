"use client"
import styled from "styled-components";
import Link from "next/link";

interface ILinkItem {
  href: string
  name: string
}

const StyledLink = styled.a`
  background: red;
`

const LinkItem = ({href,name}:ILinkItem) => {
  
  
  return (<Link prefetch href={href} passHref>
           <StyledLink>{name}</StyledLink>
         </Link>)
}

export default LinkItem
