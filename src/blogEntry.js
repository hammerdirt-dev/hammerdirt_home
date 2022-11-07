import * as React from "react";
import {Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import SyntaxHighlighter from "react-syntax-highlighter";

import {ControllingInputWithState, IsValidEmail} from './formComponents'
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
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


export function EntryTitle(props) {
    return (
        <Typography variant={props.titleFontStyle}>
            <i>
                {props.title}
            </i>
        </Typography>

    )
}

export function EntryTagLine(props) {

    let tagProps = Object.keys(props)
    let keywords = props.keywords.join(', ')

    return (
        <Typography variant={props.tagLineVariant}>
            {`${props.date}: ${props.postId}, KEYWORDS: ${keywords},  BY: ${props.user}`}
        </Typography>

        )

}

const aCodeBlock = `
function FormTextItem(props){
    return(
        <Grid item md={12} xs={12} sx={{p:1, mb:1}}>

            <TextField
                id={props.id}
                label={props.label}

                placeholder={props.placeHolder}
                value={props[props.id]}

                inputProps={{
                    sx: {

                        "&::placeholder": {
                            color: "#FF00FF"
                        }
                    }
                }}
                onChange={props.handleChange}
            />
        </Grid>
    )

}

export function SampleFormBlog(props, state) {
    return (
        <Grid container>
            <Grid item md={6} xs={6}>
                {
                    props.columnOneInputs.map( anInput => <FormTextItem {...anInput} />)
                }
            </Grid>
             <Grid item md={6} xs={6}>
                 {
                    props.rowTwoInputs.map( anInput => <FormTextItem {...anInput} />)
                }
            </Grid>
        </Grid>

  );
}
`



export function SomeBlogContentOne(){

    const [state, setState] = React.useState({
                first:"none ",
                second: "none",

            }
            )


    function handleChange(e){
        const value = e.target.value;
        setState({
            ...state,
            [e.target.id]:value,
      })
    };

    function handleEmailValidation(e){
        const isValid = IsValidEmail(e.target.value);

        if (isValid){
            let value = e.target.value
            setState({
            ...state,
            [e.target.id]:value,
      })
        }else{
            let value = "not a valid email"
            setState({
            ...state,
            [e.target.id]:value,
      })
        }

    };

    const rowOneInputs = [
        {id:"first", label:"user name", placeHolder:"enter your username", handleChange:handleChange},

    ]

    const rowTwoInputs = [
        {id:"second", label:"email", placeHolder:"enter your email", handleChange:handleEmailValidation},
    ]



    const formProps = {


        columnOneInputs:rowOneInputs,
        rowTwoInputs: rowTwoInputs,


    };


    return (
        <>

                <P>
                    The collection of data requires that users have an adequate tool to document those observations.
                    Yes, alot of information can be retrieved directly from the device. However, for many applications the observations
                    of the user are in the form of counts and must be entered into the device.
                </P>
                <P>
                    Besides the survey results there is also the description of the survey area, time to complete the survey, the number of
                    participants and any other metric that is required for a project. This implies that we need to have an efficient way to
                    make forms and modify them. The final packaging of the data prior to pushing to the server happens in the form component.
                </P>
                <P>
                    Forms can be complicated. Especially when using a library. We start with the basic text entry and validation:

                </P>


            <ControllingInputWithState {...formProps} {...state}/>
            <Box sx={{mt:2, mb:2}}>
                <Typography variant={"blueSmall"}>
                    {
                            `user name: ${state.first}, email: ${state.second}`
                    }
                </Typography>
            </Box>

            <P>
                The form above was implemented with the code below. Note that there is validation for email, however
                not for the username. In other words, there needs to be another validation method on username. For most
                applications the select or input variables will come from a list, in that case validation is automatic.
            </P>
            
            <Box sx={{p: {xs: 1, md:"10%"}}}>
            <SyntaxHighlighter children={aCodeBlock} language="javascript" style={dracula} />
            </Box>

            <P>
                The implementation at the basic level is straight forward with material UI the same as using themes. However,
                as we move towards production ready components with testing we will have to dive deeper into Material UI. At that
                point there will be compromises to make. The forms and the components are the most important part of the application
                security and user experience begin with the forms.
            </P>

        </>

    )
}

export function BlogEntryOne(props){
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
            <SomeBlogContentOne />
        </Paper>
    )
}

BlogEntryOne.defaultProps = {
    paperProps:paperProps,
    outerBoxProps:outerBoxProps,
    titleBoxProps:titleBoxProps,
    tagLineBoxProps:tagLineBoxProps,
    title:{
        title: "Getting started with MUI forms",
        titleFontStyle: titleFontStyle,
    },


}


