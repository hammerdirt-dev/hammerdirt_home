import React from 'react';
import {Grid} from '@mui/material';
import {Typography} from "@mui/material";
import {Paper} from "@mui/material";
import {Box} from '@mui/material';
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {APropsCard, WeNeedHelpCard, allProps} from "./modelCards";
import {BlogEntryOne} from "./blogEntry";
import {ABlogEntry} from "./blogEntry3";
import {P} from './thisTheme'


// code block for blog
const anotherBlock = `

import { createTheme, ThemeProvider } from '@mui/material/styles';


export const App() {

    export const blueTheme = createTheme({
      typography: {
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
      },
    });
       
    return(
        <ThemeProvider theme={blueTheme} >
            <Typography variant={"blueLarge"}>
                <div>                
                    This is a large blue heading
                 </div>
             </Typography>    
        </ThemeProvider>
        )
}
}
`
// End code block

const tagLineTwo = {
    title:{
        title: "Getting started with MUI forms",
        titleFontStyle: "h4",
    },
    tagLine:{
        date:"2022-10-23",
        user:"dev@",
        keywords: ["blog", "format", "component"],
        postId: "ui-blog-post-2",
        tagLineVariant:"pink"
    },
   }
const tagLineThree = {
    title:{
        title: "Getting started with MUI lists",
        titleFontStyle: "h4",
    },
    tagLine:{
        date:"2022-10-25",
        user:"dev@",
        keywords: ["lists", "material-ui", "component"],
        postId: "ui-blog-post-3",
        tagLineVariant:"pink"
    },
   }



export function TheUiBlog(){

    return(
    <Grid container  >
        <Grid item xs={12} md={8} sx={{p:1}} >
            <Paper sx={{p:1, mb:2}}>
                <Box sx={{mt:1}}>
                    <Typography variant={"h4"}>
                        Rethinking hammerdirt
                    </Typography >
                    <P>
                        Application development and data management have become core skills at hammerdirt. Our infrastructure,
                        designed and fielded on the fly does not reflect our capacities. It does not take advantage of the changes in the past
                        four years (the front end was react 16). Nor is it capable of handling the expected workflow. At the same time we
                        are redesigning the API. This is a great opportunity to rethink the client server setup.
                    </P>
                    <P>
                        We are not flying blind, the data display from the litter surveillance project should resemble the output from the IQAASL report.
                        With added sorting/aggregating functions and some form of .PDF export. Similar to what comes with JupyterBook or sphinx but a better
                        formatted product. Interacting with the API goes beyond sending and requesting data. Clients need an easy way to use the new executable
                        endpoints with all the security and access considerations.
                    </P>
                    <P>
                        Each project has specific needs, some of which will need to be addressed within the framework of the new UI. This includes
                        geo-positioning and interpreting geo-spatial data on the fly. Finally, the application is intended to be used on Android and
                        IOS, using React is the easy choice.
                    </P>
                </Box>
            </Paper>
            <ABlogEntry key={"ui-blog-post-3"} {...tagLineThree} />
            <BlogEntryOne key={"ui-blog-post-2"} {...tagLineTwo} />
            <Paper elevation={0} sx={{ mt:4, mb:2, p:2, borderBottomColor:'#829DB3', borderBottomWidth:"medium", borderBottomStyle:"dashed", borderTopColor:'#829DB3', borderTopWidth:"medium", borderTopStyle:"solid"}}>
                 <Box sx={{marginBottom:4, borderBottomColor:'#829DB3', borderBottomWidth:"medium", borderBottomStyle:"dashed",
                }}>
                     <Box sx={{mt:2, mb:2}}>
                         <Typography variant={"h4"}>
                             <i>
                                 The ThemeProvider
                             </i>
                         </Typography>
                     </Box>
                        <Box width={"100%"} sx={{mb:2}}>

                            <Typography variant={"pink"}>
                                2020-10-21: ui-blog-post-1, keywords: material-ui, theme,  by: dev@
                            </Typography>
                        </Box>
                </Box>
                <P>
                    The Theme provider is a way to get all the formatting to the top level very quickly. Changing parameters
                    for the project is straight forward. The reason we chose Material UI is for this type of functionality.
                    The most immediate is managing fonts for different themes and purposes.
                </P>
                <Typography variant={"blueLarge"}> This is a large blue heading, </Typography>
                <Typography variant={"blueSmall"}> This is a small blue heading, </Typography>
                <Typography variant={"pink"}>This is pink </Typography>
                <Typography variant={"body1"} >
                    <P>
                        This functionality is accessible by setting options on the ThemeProvider component. Currently
                        we are using the Typography component and checking the different fonts. The parameter
                        <Typography variant={"blueLarge"}> blueLarge </Typography> is set in when the option
                        is defined and used as an argument to <Typography variant={"pink"}> createTheme </Typography>. This method
                        assigns the key-value pairs to the theme options. See below for a simplified application.
                    </P>
                </Typography>
                <Box sx={{p:1, m:1}}>
                    <SyntaxHighlighter children={anotherBlock} language="javascript" style={dracula} />
                </Box>
                <P>
                    The ThemeProvider is a <i> higher order component </i> ( HOC ). The biggest gain is that properties do not have to be passed
                    from one component to the next. All the properties are available to all the components that are wrapped in the <Typography variant={"pink"}> {`<ThemeProvider> </ThemeProvider>`} </Typography>
                    tag. This method can be used to control most of the <i>global</i> properties of an application with out having to declare <i>Global variables</i>. This includes assigning
                    fonts, color palettes and properties for tables, lists and tooltips.
                </P>
           </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{p:1}}>

            <WeNeedHelpCard />
            <Box sx={{mt:2, mb:2, p:1}}>
                    <h2>
                        Resources
                    </h2>
                </Box>

            {
                allProps.map(aCard => <APropsCard key={aCard.company} {...aCard} />)
            }
        </Grid>
    </Grid>


    )

}
