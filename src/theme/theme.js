import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';


export const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
    });