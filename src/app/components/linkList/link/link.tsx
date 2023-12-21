"use client"
import styled from "styled-components";
import Link from "next/link";

interface ILinkItem {
  href: string
  name: string
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  height: 3rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  background: linear-gradient(145deg, #304c5a, #29404c);
  box-shadow: 5px 5px 10px #142026, -5px -5px 10px #466e82;
`

const LinkItem = ({href,name}:ILinkItem) => {
  
  
  return (
           <StyledLink prefetch href={href}>{name}</StyledLink>
         )
}

export default LinkItem
