"use client"
import styled from "styled-components";
import Link from "next/link";

interface ILinkItem {
  href: string
  name: string
}

const StyledLink = styled(Link)`
  background: red;
`

const LinkItem = ({href,name}:ILinkItem) => {
  
  
  return (
           <StyledLink prefetch href={href}>{name}</StyledLink>
         )
}

export default LinkItem
