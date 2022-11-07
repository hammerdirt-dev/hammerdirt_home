import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";
import {Typography} from "@mui/material";
import React from "react";
import {help_us_data} from "./modelCards";
import {SimpleCard, WeNeedHelpCard} from "./modelCards";
import Box from "@mui/material/Box"
import {someUpdates, AnUpDate} from "./updatesNews";
import {P} from './thisTheme'



export function OpenTab(){
    return(
        <Grid container >
            <Grid item xs={12} md={8} sx={{p:1}}>
                <Paper sx={{p:1, mb:2}}>
                     <Box sx={{mt:1}}>
                         
                         <P>
                             Hammerdirt is a non-profit association dedicated to helping communities develop environmental assessment tools. Our largest project
                             was the Survey of visible pollutants on Swiss rivers and lakes (completed in 2021). We develop the data pipeline from client to server
                             all the way to analysis, and we do the field work.
                         </P>
                         <Box sx={{mt:2, mb:2}}>
                            <Typography variant={"blueSmall"} component={"div"}> !Pardon the dust while we refit and redesign for the next mission!</Typography>
                         </Box>
                         <P>
                             <Typography variant={"pink"} component={"span"}>  <i>Where we fit: </i> </Typography>
                             If your project will be collecting data from user observations then we can design the process and build infrastructure
                             including client and server side applications. We use python (flask, Django, Scipy, PyMC, scikit),
                             JavaScript (React, Node, D3/4, Material UI, Express) and we have our own servers right here in Switzerland.
                         </P>
                         
                     </Box>
                </Paper>
                <Paper sx={{mb:2}} elevation={0}>
                    <h2>
                        News and updates:
                    </h2>
                    {
                      someUpdates.map((vals) => <AnUpDate key={vals.updateNumber} {...vals} />)
                    }
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{pt:1,m:0}} >
                <WeNeedHelpCard />
                <SimpleCard {...help_us_data.helpApi} />
                <SimpleCard {...help_us_data.helpFrontEnd} />
                <SimpleCard {...help_us_data.helpNb} />
            </Grid>
        </Grid>

    )

}
