import { createMuiTheme, responsiveFontSizes, ThemeOptions } from "@material-ui/core";


const lightTheme: ThemeOptions = {
  palette: {
    type: "light",
  },
};
const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
  },
};

function getTheme(){
  return lightTheme;
}

const theme = createMuiTheme(getTheme());

export default responsiveFontSizes(theme);
