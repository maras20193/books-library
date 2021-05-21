import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
    });