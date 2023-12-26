import styled from "styled-components";

const StyledThemeSwitcher = styled.div`
  height: 5rem;
  color: ${props => props.theme.color};
  border: 1px ${props => props.theme.color} solid;
  display: flex;
  justify-content: space-around;
`

const ThemeSwitcher = () => {
  return <StyledThemeSwitcher></StyledThemeSwitcher>
}

export default ThemeSwitcher
