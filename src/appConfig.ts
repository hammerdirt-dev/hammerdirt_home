import React from 'react'
import {ITextFieldProps, IModalContent } from "./DataStructures"

import { createTheme } from '@mui/material/styles';

export const loginContent: IModalContent = {
  title: "Log-in",
  message: "Login services are temporarily disabled from this application. If your password is still valid you can log in to the admin application.",

}

export const textAreaProps:ITextFieldProps = {
    emailField: {
        margin: "dense",
        id: "send-creds-email",
        label: "Email",
        type: "email",
        variant: "standard",
        fullWidth: true,
        autoFocus: true
    },
    passWordField: {
        margin: "dense",
        id: "send-creds-password",
        label: "Password",
        type: "password",
        variant: "standard",
        fullWidth: true,
        autoFocus: true
    },
}


export const themeOptions = createTheme({

    palette: {
        primary: {
            main: '#31262f',
            light: '#31262f',
            dark: '#31262f',
        },
        secondary: {
            main: '#502737',
            light: '#502737',
            dark: '#502737',
        },
    }});