import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import {ThemeProvider, responsiveFontSizes, createTheme } from "@mui/material/styles";


const MontserratFont = createTheme({
    typography: {
    fontFamily: 'Montserrat',
  }}
)

const bulletedListItem = createTheme({
  components: {
    // Name of the component
    MuiListItem: {
        styleOverrides: {
        // Name of the slot
            root: {
                // Some CSS
                // ensure that lines up with other
                // MUI components
                textAlign: "left",
                listStyleType: "disc",
                listStylePosition: "inside",
                display: "list-item",
                margin:0,
                paddingLeft: 16,
                alignItems: "center",
                fontFamily:"Alegreya"

        },
      },
    },
  },
});

const numberedListItem = createTheme({
  components: {
    // Name of the component
    MuiListItem: {
        styleOverrides: {
        // Name of the slot
            root: {
                // Some CSS
                textAlign: "left",
                listStyleType: "decimal",
                listStylePosition: "inside",
                display: "list-item",
                margin:0,
                paddingLeft: 16,
                fontFamily: "Montserrat"
        },
      },
    },
  },
});

export const NumberedListItem = responsiveFontSizes(numberedListItem)
export const BulletedListItem = responsiveFontSizes(bulletedListItem)






const listProps = {

    width: '100%',
    maxWidth: {xs:380, md:800},
    backgroundColor: 'background.paper',
    m:0,
    p:2,
    borderStyle:"dashed",
    borderWidth:"thin",
    borderColor: "gray"
}



export default function BasicList() {
  return (
    <Box sx={{...listProps}}>
        <List>
            <ThemeProvider theme={BulletedListItem}>
                <ListItem>
                    The theme provider can be used to change the font and appearance of lists. This list uses a serif font and a bullet.
                </ListItem>
            </ThemeProvider>
            <ListItem>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText>
                    <ThemeProvider theme={MontserratFont}>
                        This has a different font and uses an icon instead of a bullet. The bullet is from the Material Icons package.
                    </ThemeProvider>
                </ListItemText>
            </ListItem>
            <ThemeProvider theme={NumberedListItem}>
                <ListItem>
                    This is a numbered list, with a sans-serif font. All the list display options are available through the createTheme method.
                </ListItem>
            </ThemeProvider>
        </List>
    </Box>
  );
}
