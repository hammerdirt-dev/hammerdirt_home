import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea} from "@mui/material";
import Grownplates from "./images/Grownplates.jpg"

export function CardThree() {
  const cardText = (
  <React.Fragment>
    <CardContent >
      <Typography fontSize={18} component="div">
       <p>
         Water quality is important to everyone. Abrupt increases in economic activity may have an adverse effect on
           local water quality in lakes an rivers. Thus increasing the public health risk if this occurs in zones of heavy use.
       </p>
        <p>
          We explored this topic with the <a href={"https://wiki.hackuarium.ch/w/Main_Page"} >Hackuarium </a> in 2016 by sampling the lake Water during the Montreux Jazz Festival.
            The article was published in <i> Ecological Solutions and Evidence </i>.
        </p>
      </Typography>
    </CardContent>
    <CardActionArea href={"https://besjournals.onlinelibrary.wiley.com/doi/10.1002/2688-8319.12094"}>

      <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Water quality
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The organizers of the Montreux Jazz have decided to continue monitoring this year (2022).
          </Typography>
      </CardContent>
      <CardMedia
          component="img"
          height="auto"
          image={Grownplates}
          alt="Map of survey locations"
        />
      </CardActionArea>
  </React.Fragment>
  );
  return (

      <Card variant="outlined">{cardText}</Card>

  );
}
