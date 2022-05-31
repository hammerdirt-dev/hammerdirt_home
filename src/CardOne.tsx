import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea} from "@mui/material";
import iqaasl from "./images/iqaasl.jpeg"

export default function CardOne() {
  const cardText = (
  <React.Fragment>
    <CardContent >
      <Typography fontSize={18} component="div">
       <p>
         Hammerdirt specializes in the collection, storage and reporting of citizen science data. Our first
        project was in 2015, monitoring the trash on the shores of Lake Geneva in the region of Montreux.
       </p>
       <p>
          We realized early on that data management and reporting was a challenge for all organizations.
          So we focussed on that by considering the data generating process and possible end uses for data from citizen science projects.
       </p>
      </Typography>
    </CardContent>
    <CardActionArea href={"https://hammerdirt-analyst.github.io/IQAASL-End-0f-Sampling-2021/titlepage.html"}>
       <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            National litter survey 2021
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The data pipeline was sufficiently developed to complete
            a national litter survey.
          </Typography>
       </CardContent>
       <CardMedia
          component="img"
          height="auto"
          image={iqaasl}
          alt="Map of survey locations"
       />
    </CardActionArea>
  </React.Fragment>
  );
  return (

      <Card variant="outlined">{cardText}</Card>

  );
}
