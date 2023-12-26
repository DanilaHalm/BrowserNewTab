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
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: 1rem;
  height: 3rem;
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  background: ${props => props.theme.background};
  box-shadow: ${props => props.theme.boxshadow};

  &:hover {
    box-shadow: ${props => props.theme.hover.boxshadow};
  }
`

const LinkItem = ({href,name}:ILinkItem) => {
  
  
  return (
           <StyledLink prefetch href={href}>{name}</StyledLink>
         )
}

export default LinkItem
