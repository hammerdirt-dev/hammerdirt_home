import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";
import {Typography} from "@mui/material";
import React from "react";
import {help_us_data} from "./modelCards";
import {SimpleCard, WeNeedHelpCard} from "./modelCards";
import Box from "@mui/material/Box"
import {someUpdates, AnUpDate} from "./updatesNews";
import {P} from './thisTheme'
import {PredictionGrid} from "./sortableTable";
import grandLacSummary from './data/grand_lac_summary.json';


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
