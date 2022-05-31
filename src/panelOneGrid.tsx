import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardOne from './CardOne'
import { CardThree } from "./CardThree";
import { CardFive } from "./CardFive";
import { CardSix } from "./CardSix";
import {CardSeven} from "./CardSeven";
import {CardEight} from "./CardEight";

export default function BasicGrid() {
  const anXs = 12;
  const aMd = 3;
  const alg = 3;

  const breakPoints = {"sm":anXs, "md":aMd, "lg":alg}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columnSpacing={1} rowSpacing={4}>

        <Grid item {...breakPoints}>

             <CardOne />

        </Grid>
        <Grid item {...breakPoints}>

             <CardThree />

        </Grid>
          <Grid item {...breakPoints} >

             <CardSix />

        </Grid>
        <Grid item {...breakPoints} >

             <CardFive />

        </Grid>

          <Grid item {...breakPoints} >

             <CardSeven />

        </Grid>
          <Grid item {...breakPoints} >

             <CardEight />

        </Grid>

      </Grid>
    </Box>
  );
}
