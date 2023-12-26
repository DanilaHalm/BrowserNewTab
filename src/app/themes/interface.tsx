interface ITheme {
  name: string,
  color: string,
  background: string,
  boxshadow: string,
  focus: {
    background: string,
    boxshadow: string,
  },
  hover: {
    boxshadow: string
  }
  settingsImage: string,
  settingsXmarkImage: string
}

export default ITheme
