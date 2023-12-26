import ITheme from "./interface";

const darkTheme: ITheme = {
  name: "Dark",
  color: "#dcd3e0",
  background: "linear-gradient(145deg, #111829, #0e1422)",
  boxshadow:  "5px 5px 10px #06090f, -5px -5px 10px #1a233d",
  focus: {
    background: "#101626",
    boxshadow: "inset 5px 5px 10px #06090f, inset -5px -5px 10px #1a233d"
  },
  hover: {
    boxshadow: "2px 2px 5px #7296a8, -2px 2px 5px #7296a8, -2px -2px 5px #7296a8, 2px -2px 5px #7296a8"
  },
  settingsImage: "/settings-white.png",
  settingsXmarkImage: "/xmark-white.png"
}

export default darkTheme
