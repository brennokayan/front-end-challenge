import { createTheme } from "@mui/material";
import {  blueGrey, common } from "@mui/material/colors";


export const LightTheme =  createTheme ({
    palette: {
        primary:  {
            main: blueGrey[600] ,
            dark: blueGrey[700] ,
            light: blueGrey[500],
            contrastText: "#ffffff",
        },
        secondary:  {
            main: common.black ,
            dark: common.black[700] ,
            light: common.black[600],
            contrastText: "#fff",  
        },

        background: {
            default: "#e7e6e3",
            paper: "#fff",

        },

    },
})
