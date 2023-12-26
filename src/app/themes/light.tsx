import ITheme from "./interface";

const lightTheme: ITheme = {
  name: "Light",
  color: "#101626",
  background: "linear-gradient(145deg, #ebe2f0, #c6beca)",
  boxshadow:  "5px 5px 10px #c6beca, -5px -5px 10px #f2e8f6",
  focus: {
    background: "#dcd3e0",
    boxshadow: "inset 5px 5px 10px #c6beca, inset -5px -5px 10px #f2e8f6"
  },
  hover: {
    boxshadow: "2px 2px 5px #7296a8, -2px 2px 5px #7296a8, -2px -2px 5px #7296a8, 2px -2px 5px #7296a8"
  },
  settingsImage: "/settings-black.png",
  settingsXmarkImage: "/xmark-black.png"
}

export default lightTheme