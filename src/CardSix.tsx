import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CardSix() {
  const cardText = (
  <React.Fragment>
    <CardContent >
      <Typography fontSize={18} component="div">
       <p>
         Data science and application development are necessary skills for handling the volumes of data that can be produced
           by citizen science projects. Those skills have been the focus of hammerdirt development since day one.
       </p>
       <p>
           The API was designed and built using Django (Python) and the data entry application was done with ReactJS (JavaScript). The static reports
           are generated using JupyterNotebooks and Sphinx running in a Conda environment.
       </p>
       <p>
           We are undertaking a major revision of all of our software. For the front-end this includes integrating the reporting structure from the recently
           completed national survey and adding query options from the user interface. The API will be completely re-engineered to match the requirements of the
           new front-end and the addition of new projects.
       </p>
      </Typography>
    </CardContent>
  </React.Fragment>
  );
  return (

      <Card variant="outlined">{cardText}</Card>

  );
}
