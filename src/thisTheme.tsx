import * as React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import styled from '@emotion/styled'
import MuiListItemText from "@mui/material/ListItemText"

export const options = {
      palette: {
        type: 'dark',

        primary: {
          main: '#1E90FF',
        },
        secondary: {
          main: '#FF00FF',
        },
        success: {
          main: '#32CD32',
        },
      },

    typography: {
        fontFamily: "'Montserrat', 'sans-serif'",

      h1: {
        fontFamily: 'Merriweather',
      },
      h2: {
        fontFamily: 'Merriweather',
      },
      body1: {
        fontFamily: 'Montserrat',
      },
      body2: {
        fontFamily: 'Alegreya',
      },
      pink:{
        fontFamily:'Montserrat',
        color: "#FF00ff",
      },
      blueLarge: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        color: '#1E90FF',
        fontSize: 30

      },
      blueSmall:{
        fontFamily: "Alegreya",
        fontWeight: 300,
        fontStyle: "italic",
        color: '#1E90FF'
      },
      button: {
        fontFamily: 'Montserrat',
      },
      caption: {
        fontFamily: 'Allegreya',
      },
      h3: {
        fontFamily: 'Merriweather',
      },
      h4: {
        fontFamily: 'Merriweather',
      },
      h4sans: {
        fontFamily: 'Montserrat',
        fontSize: "80px",
        fontWeight:200,
      },
      h5: {
        fontFamily: 'Merriweather',
      },
      subtitle1: {
        fontFamily: 'Droid Serif',
      },
      h6: {
        fontFamily: 'Merriweather',
      },
      subtitle2: {
        fontFamily: 'Droid Serif',
      },
    },

    props: {
      MuiTooltip: {
        arrow: true,
      },
      MuiButton: {
        size: 'small',
      },
      MuiButtonGroup: {
        size: 'small',
      },
      MuiCheckbox: {
        size: 'small',
      },
      MuiFab: {
        size: 'small',
      },
      MuiFormControl: {
        margin: 'dense',
        size: 'small',
      },
      MuiFormHelperText: {
        margin: 'dense',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiInputBase: {
        margin: 'dense',
      },
      MuiInputLabel: {
        margin: 'dense',
      },
      MuiRadio: {
        size: 'small',
      },
      MuiSwitch: {
        size: 'small',
      },
      MuiTextField: {
        margin: 'dense',
        size: 'small',
      },
      MuiList: {
        dense: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: 'small',
      },

    },
    };

const ThisTheme = createTheme(options)

export const ResponsiveFontTheme = responsiveFontSizes(ThisTheme)

// export const ListTextTheme = createTheme({
//   typography:{
//     fontFamily:"serif",
//
//
//     },
//   }
// )

export const P = styled.p(
    {
      fontFamily: "Montserrat",
      fontWeight: 400,
      fontSize:18,
      lineHeight:1.5

    })
;

