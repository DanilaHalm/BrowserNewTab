import styled from "styled-components";

const StyledButton = styled.button`
  width: 8rem;
  height: 3rem;
  border: 1px ${props => props.theme.color} solid;
  border-radius: 8px;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ThemeSwitcherButton = () => {
  return <StyledButton>{"Theme"}</StyledButton>
}

export default ThemeSwitcherButton
