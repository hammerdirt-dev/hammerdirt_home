import React from 'react';
import './App.css';

import ThisAppBAr from "./thisAppBAr";
import {AboutUs} from "./aboutTab";
import {OpenTab} from "./openTab";
import {FeatureTab} from "./featureTab";
import {TheUiBlog} from "./theUiBlog";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid'
import {ResponsiveFontTheme} from "./thisTheme";
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/alegreya/variable.css';
import "@fontsource/montserrat"
import "@fontsource/josefin-sans"


function App() {
    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        };
    return (

    <ThemeProvider theme={ResponsiveFontTheme} >
        <ThisAppBAr />

        <Grid container  sx={{p:0, m:0}}>



            <Grid item xs={12} md={12} sx={{p:0, m:0}}>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.main', p:1 }} >
                    <Tabs
                        value={value} textColor={"secondary"}
                        indicatorColor={"secondary"} variant={"scrollable"}
                        scrollButtons allowScrollButtonsMobile onChange={handleChange}
                        aria-label="main menu of hammerdirt"

                    >
                        <Tab value={1} label="News and updates" aria-label="new events and articles" />
                        <Tab value={2} label="Testing a GLM" aria-label="the initial field test of the general linear model" />
                        <Tab value={3} label="The UI Blog" aria-label="a description of the services provided" />
                        <Tab value={4} label="About" aria-label="a description of the services provided" />
                    </Tabs>
                </Box>
            </Grid>
                <Grid item xs={12} md={12} sx={{p:0, m:0}}>

                {value === 1 && (
                    <OpenTab />
                )}
                {value === 2 && (
                    <FeatureTab />
                )}
                {value === 3 && (
                    <TheUiBlog />
                )}
                {value === 4 && (
                    <AboutUs />
                )}
             </Grid>
            <Grid item xs={12} md={12} sx={{p:0, m:0}}>
                 <Box sx={{width:"100%", pt:"10px", backgroundColor: "primary.main", height:"40px" ,display:"flex", alignItems:"flex-end", color:"white"}}>
                        <Box sx={{ml:"10px"}}>
                        <h4>

                                hammerdirt, Brugstrasse 39, Biel 2503 -- info at

                        </h4>
                        </Box>

                 </Box>
            </Grid>
        </Grid>

     </ThemeProvider>

)}

export default App;
