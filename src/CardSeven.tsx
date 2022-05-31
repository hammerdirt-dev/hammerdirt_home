import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CardSeven() {
  const cardText = (
  <React.Fragment>
    <CardContent >
        <Typography variant="h4" component="div">
            Services
        </Typography>
      <Typography fontSize={18} component="div">
       <p>
         We can help with the design and implementation of your data pipeline from collection to report generation. This
           includes a dedicated application for the data collection process with authentication and a secure backend.
       </p>
       <p>
           We are familiar with the following programing languages and libraries:
           <ul>
               <li>Python: Scipy, pandas, Sphinx, Ipython, JupyterNotebooks</li>
               <li>JavaScript: ReactJS, HighCharts, node</li>
               <li>R</li>
               <li>HTML, CSS </li>
               <li>Linux: BASH</li>
           </ul>
       </p>
       <p>
          Furthermore, all development and work product is available in the repository. For example to follow the
           development of the new API click <a href={"https://github.com/hammerdirt-dev/hammerdirt_api"}> here </a>
           or the new front-end click <a href={"https://github.com/hammerdirt-dev/plages_prop"}>here</a> or even the
           development of this application (hammerdirt.ch) <a href={"https://github.com/hammerdirt-dev/hammerdirt_home"}>here</a>.
       </p>
      </Typography>
    </CardContent>
  </React.Fragment>
  );
  return (

      <Card variant="outlined">{cardText}</Card>

  );
}
