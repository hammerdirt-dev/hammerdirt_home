import * as React from "react"
import {Paper, Typography} from "@mui/material";
import {Box} from "@mui/material";
import {P} from './thisTheme'

const update_two = {
    title: "Testing beach litter predictions with EPFL solid waste Engineers",
    date: "2020-10-07",
    user: "analyst@",
    updateNumber: "updates-one-2020-10-07",
    message: "The students from the EPFL Solid Waste Engineering team were asked to estimate\n" +
        " the amount of trash they would pick up at the beach. Then they went to the beach and\n" +
        " collected trash. At the same time we put together a simple Generalized Linear Model\n" +
        " of the rates of litter for the lake. See the details in the TESTING A GLM tab."
}

const update_one = {
    title: "Designing the UI -- Implementing Material UI opensource",
    date: "2020-10-19",
    user: "dev@",
    updateNumber: "updates-one-2020-10-19",
    message: "The redesign of the user interface (UI) starts today. The goal is to generalize the UI\n" +
        " enough so that multiple projects and apps can be run from the same set of components. However,\n" +
        " each project will have specific requirements that will need to be addressed. Material UI has been\n" +
        " chosen as the component library, it is opensource and supported by Google and implementation with React\n" +
        " is straight forward."

}

const update_three = {
    title: "The plagespropres portal will be down on November 1",
    date: "2020-10-01",
    user: "dev@",
    updateNumber: "updates-three-2020-10-01",
    message: "The app was created specifically for the IQAASL project. This app was never" +
        " intended to be scaled which means that expanding the user base or implementing new functionalities" +
        " would be painful."
}


const update_four = {
    title: "The hammerdirt API will be down on November 1",
    date: "2020-10-01",
    user: "dev@",
    updateNumber: "updates-four-2020-10-01",
    message: "The students from the EPFL Solid Waste Engineering team were asked to estimate\n" +
        " the amount of trash they would pick up at the beach. Then they went to the beach and\n" +
        " collected trash. At the same time we put together a simple Generalized Linear Model\n" +
        " of the rates of litter for the lake. See the details in the Feature."
}


export const someUpdates = [
    update_one,
    update_two,
    update_three,
    update_four,
]

export function AnUpDate (props) {

    return (

        <Box width={"100%"} key={props.updateNumber}>
            <Paper elevation={3} sx={{p:1, mb:1, mt:1}}>
            <Box>
                <Typography variant={"h6"}>

                   <i>
                   {props.title}
                   </i>
               </Typography>
            </Box>
            <Box width={"40%"}>

                <Box>
                    <Typography variant={"pink"}>
                    {props.date}, {props.user}
                    </Typography>
                </Box>

            </Box>

            <P>
                {props.message}
            </P>

            </Paper>
        </Box>


    )

}


