/** Imports */
import { createTheme } from "@mui/material";

/**
 * Created app theme.
 * @function
 * @name THEME
 */
const THEME = createTheme({
    palette: {
        primary: {
            main: '#1797ff'
        },
        secondary: {
            main: '#d6d6d6',
            dark: '#606060'
        }
    }
})

export default THEME;