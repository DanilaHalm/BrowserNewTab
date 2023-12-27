import styled from "styled-components";
import ThemeSwitcherButton from "../themeSwitcherButton/themeSwitcherButton";
import darkTheme from "../../../themes/dark";
import lightTheme from "@/app/themes/light";

const StyledThemeSwitcher = styled.div`
  margin: 1rem auto;
  width: 90%;
  height: 5rem;
  color: ${(props) => props.theme.color};
  border: 1px ${(props) => props.theme.color} solid;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ThemeSwitcher = () => {
  return (
    <StyledThemeSwitcher>
      <ThemeSwitcherButton theme={darkTheme} />
      <ThemeSwitcherButton theme={lightTheme} />
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
