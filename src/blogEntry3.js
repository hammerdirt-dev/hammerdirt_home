import * as React from "react";
import {Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import BasicList from "./lists";
import SyntaxHighlighter from "react-syntax-highlighter";
import {EntryTitle, EntryTagLine} from "./blogEntry"

import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {createTheme} from "@mui/material/styles";
import {P} from './thisTheme'


const paperProps = {
    mt: 4,
    mb: 2,
    p: 2,
    borderBottomColor: '#829DB3',
    borderBottomWidth: "medium",
    borderBottomStyle: "dashed",
    borderTopColor:'#829DB3',
    borderTopWidth:"medium",
    borderTopStyle:"solid"
}

const outerBoxProps = {
    marginBottom:4,
    borderBottomColor:'#829DB3',
    borderBottomWidth:"medium",
    borderBottomStyle:"dashed",

}

const titleBoxProps = {
    mt:2,
    mb:2
}

const titleFontStyle = ""
const tagLineBoxProps = {
     width:"100%",
     mb:2
}

const listProps = {

    width: '100%',
    maxWidth: {sx:380, md:600},
    backgroundColor: 'background.paper',
    m:0,
    p:2,
    borderStyle:"dashed",
    borderWidth:"thin",
    borderColor: "gray"
}

// This is a code block for the syntax highlighter
const acodeblock = `
const NumberedListItem = createTheme({
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

export default function SampleList() {
  return (
    <Box sx={{...listProps}}>
        <List>
            <ThemeProvider theme={BulletedListItem}>
                <ListItem>
                    The theme provider can be used to change the font and appearance of lists.
                </ListItem>
            </ThemeProvider>
            <ListItem>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText>
                    <ThemeProvider theme={MontserratFont}>
                        This has a different font and uses an icon instead of a bullet
                    </ThemeProvider>
                </ListItemText>
            </ListItem>
            <ThemeProvider theme={NumberedListItem}>
                <ListItem>
                   
                        This is a numbered list
                    
                </ListItem>
            </ThemeProvider>
        </List>
    </Box>
  );
}`
// End mock code

function SomeContent(){

    return (
        <>
            
                <P>
                    Lists are used extensively. In the "Testing GLM" article we used the standard HTML markup for lists.
                    However, Material UI has a complete set for all the components of a list.
                </P>
                <P>
                    Implementation is confusing at first, getting a numbered list required creating a theme and
                    then using the ThemeProvider component. The default list is not numbered or bulleted.
                </P>
           
                <Box sx={{p:1, m:1, maxWidth:{xs:400, md:800}}} >
                    <BasicList />
                </Box>
                <Box sx={{p:1, m:1, maxWidth:{xs:400, md:800}}} >
                    <SyntaxHighlighter children={acodeblock} language={"javascript"} style={dracula} />
                </Box>
            
                <P>
                   The theme and style methods are key to getting the most out of Material UI. You can set some
                    default theme and create a theme for specific cases. The flyover that we did in the first blog
                    entry does not address all the details. We will have to revisit the subject right away.
                </P>
           
        </>

    )
}

export function ABlogEntry(props){
    return (
        <Paper elevation={0} sx={props.paperProps}>
            <Box sx={props.outerBoxProps}>
                <Box sx={props.titleBoxProps}>
                    <EntryTitle {...props.title} />
                </Box>
                <Box sx={props.tagLineBoxProps}>
                    <EntryTagLine {...props.tagLine} />
                </Box>
            </Box>
            <SomeContent />
        </Paper>
    )
}

ABlogEntry.defaultProps = {
    paperProps:paperProps,
    outerBoxProps:outerBoxProps,
    titleBoxProps:titleBoxProps,
    tagLineBoxProps:tagLineBoxProps,
    title:{
        title: "Getting started with MUI forms",
        titleFontStyle: titleFontStyle,
    },


}

SomeContent.defaultProps = {
    first:"none ",
    second: "none",
    third: " ",
    fourth: " ",
    fifth: " ",
    sixth: " "
}

