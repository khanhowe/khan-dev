import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00bcd4'
        },
        secondary: {
            main: '#ff5722'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});

export default theme;