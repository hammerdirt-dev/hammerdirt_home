import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea} from "@mui/material";
import flower from "./images/flower.jpg"

export function CardFive() {
  const cardText = (
  <React.Fragment>
    <CardContent >
      <Typography fontSize={18} component="div">
       <p>
         Increasing or maintaining biodiversity is difficult in an urban environment. However, as cities grow there is more
           interest in this topic. Plant species are an important part of biodiversity.
       </p>
       <p>
           Hammerdirt started a plant identification and inventory project in 2019 using resources from the Swiss Botanical
           Society and Info flora. This is an ongoing project (third year) in Biel / Bienne with the goal of identifying the
           most common species in the municipality.
        </p>
      </Typography>
    </CardContent>
    <CardActionArea href={"https://thorerismann.github.io/flora-buckets/intro.html"}>
         <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Biodiversity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The results from the first two years and the germination trials are available summarized.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="auto"
          image={flower}
          alt="Map of survey locations"
        />

      </CardActionArea>

  </React.Fragment>
  );
  return (

      <Card variant="outlined">{cardText}</Card>

  );
}
