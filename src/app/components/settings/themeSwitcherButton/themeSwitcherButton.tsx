import styled from "styled-components";
import ITheme from "../../../themes/interface";
  
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

const ThemeSwitcherButton = (theme: ITheme) => {
  return <StyledButton>{"Theme"}</StyledButton>
}

export default ThemeSwitcherButton
