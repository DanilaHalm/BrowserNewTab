import ITheme from "./interface";

const lightTheme: ITheme = {
  name: "Light",
  color: "#101626",
  background: "linear-gradient(145deg, #ebe2f0, #c6beca)",
  boxshadow:  "5px 5px 10px #b0a9b3, -5px -5px 10px #fffdff",
  focus: {
    background: "#dcd3e0",
    boxshadow: "inset 5px 5px 10px #b0a9b3, inset -5px -5px 10px #fffdff"
  },
  hover: {
    boxshadow: "2px 2px 5px #7296a8, -2px 2px 5px #7296a8, -2px -2px 5px #7296a8, 2px -2px 5px #7296a8"
  },
  settingsImage: "/settings-black.png",
  settingsXmarkImage: "/xmark-black.png"
}

export default lightTheme
