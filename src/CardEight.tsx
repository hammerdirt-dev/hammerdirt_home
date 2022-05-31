import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CardEight() {
  const cardText = (
  <React.Fragment>
    <CardContent >
      <Typography variant="h4" component="div">
            About
      </Typography>
      <Typography fontSize={18} component="div">
       <p>
         Hammerdirt was started by Shannon (<a href={"https://www.linkedin.com/in/shannon-erismann-3a287746/"}>LinkedIn</a>) and Roger (<a href={"https://www.linkedin.com/in/rogererismann/"}>LinkedIn</a>) Erismann  after completing a series of beach clean ups in the Lake Geneva region. At the time both
           were volunteer lifeguards and active members of the Montreux Lifeguard Association. Shannon is a Geologist by education and held positions as  hydrologist and a technician in a fish hatchery, Roger has an MBA and a BA in Economics. Since
           2014 both have devoted themselves to projects that are beneficial to the environment.
       </p>
       <p>
           For more information contact info@hammerdirt.ch
       </p>
      </Typography>
      <Typography component="address">
        <ul>
            <li>hammerdirt</li>
            <li>Brugstrasse 39</li>
            <li>2503 Biel</li>
            <li>Switzerland</li>
        </ul>
      </Typography>
    </CardContent>
  </React.Fragment>
  );
  return (

      <Card variant="outlined">{cardText}</Card>

  );
}
