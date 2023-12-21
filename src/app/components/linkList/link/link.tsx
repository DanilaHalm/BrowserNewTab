"use client"
import styled from "styled-components";
import Link from "next/link";

interface ILinkItem {
  href: string
  name: string
}

const StyledLink = styled(Link)`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  height: 3rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  background: linear-gradient(145deg, #304c5a, #29404c);
  box-shadow: 5px 5px 10px #142026, -5px -5px 10px #466e82;

  &:hover {
    box-shadow: 2px 2px 5px #7296a8, -2px 2px 5px #7296a8, -2px -2px 5px #7296a8, 2px -2px 5px #7296a8;
  }
`

const LinkItem = ({href,name}:ILinkItem) => {
  
  
  return (
           <StyledLink prefetch href={href}>{name}</StyledLink>
         )
}

export default LinkItem
