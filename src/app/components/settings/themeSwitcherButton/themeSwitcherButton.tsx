import styled from "styled-components";
import ITheme from "../../../themes/interface";
import { useContext } from "react";
import ThemeContext from "../../appWrapper/context";

interface IStyledButton {
  theme: ITheme;
}

const StyledButton = styled.button`
  width: 8rem;
  height: 3rem;
  border: 1px ${(props) => props.theme.color} solid;
  border-radius: 8px;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.hover.boxshadow};
  }

  &:active {
    background: ${(props) => props.theme.focus.background};
    box-shadow: ${(props) => props.theme.focus.boxshadow};
  }
`;

const ThemeSwitcherButton: React.FC<IStyledButton> = ({ theme }: IStyledButton) => {
  const [_, setCurrentTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setCurrentTheme(theme);
  };

  return (
    <StyledButton onClick={handleClick} theme={theme}>
      {theme.name}
    </StyledButton>
  );
};

export default ThemeSwitcherButton;
