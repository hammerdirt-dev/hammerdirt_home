import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import RogerProfilePic from './images/roger_cropped2.jpeg'
import Box from "@mui/material/Box";

import {APropsCard, allProps} from "./modelCards";


const courseLinks = [
    {
        name:"Google IT Automation",
        theLink: "https://coursera.org/share/1067869797e1849aa3a37d385b559303"
    },
    {
        name: "Mathematics for machine learning",
        theLink: "https://coursera.org/share/686abd0dd70c4adef958de84bd41b7a4",
    },
    {
       name:"Bayesian mixture models",
       theLink:  "https://coursera.org/share/7fdc2bf2cce394a5e4db85e185172342",
    },
    {
        name: "Applied text mining",
        theLink: "https://coursera.org/share/7fdc2bf2cce394a5e4db85e185172342",
    }

]
export function AnImageBox(props){
    return(
         <Box
             component="img"
             sx={{
                 height:"auto",
                 width:"100%",
                 maxWidth:"300px",
                 margin:"auto",
                 p:4
             }}
             alt={props.altMessage}
             src={props.theImage}
             />
    )
}

const SomeImageProps = {
    imageWidth: 250,
    altMessage:"Roger Erismanns profile picture",
    theImage:RogerProfilePic
}

export function AboutUs(){


    return(
        <Grid container >
          <Grid item xs={12} md={6} sx={{p: 3, minHeight:"80vh"}}>
               <Grid container>
                   <Grid item xs={12} md={12}>
                      <h1>
                          Services
                      </h1>
                      <h4>
                          We provide research and support services for organisations in the environmental and academic fields.
                      </h4>
                      <Typography variant={"body1"}>
                          <p>
                              Experienced in collecting and managing field data. We design and use our own applications to minimize admin time and
                              maximize time in the field. We use standard libraries in Python and JavaScript to connect devices and people. Our current
                              operating stack is PostGres-Django-React. These are the libraries we are the most familiar with.
                          </p>
                          <p>
                              We can work with design teams and research teams to implement visualisations and functionality specific to
                              the operating needs. Our team includes a biologist, geologist, economist and application developer. Together
                              we have completed local and national projects, that brought real change to the way pollution is accounted for
                              and reported.
                          </p>
                          <p>
                              Since inception our organisation has focussed on collecting and managing the data from environmental monitoring.
                              The methods and technologies in the field evolve rapidly as well as the methods for creating value from that data.
                              As a result we are also familiar with pandas, PyMC, SciPy, ScikitLearn and R. Many of our models are initiated in
                              Jupyter Notebooks.
                          </p>
                      </Typography>
                   </Grid>
                   <Grid container>
                       <Grid item xs={12} md={12} >
                           <h3>
                               Thanks to the all supporters of the tooling we use
                           </h3>
                       </Grid>
                       {
                           allProps.map(aprop =>
                               (
                                   <Grid key={aprop.company}item xs={6} md={3}>

                                       <APropsCard {...aprop} />

                                   </Grid>
                               ))
                       }

                   </Grid>
               </Grid>
          </Grid>
           <Grid item xs={12} md={6} sx={{p: 3}}>
               <Grid container>
                   <Grid item xs={12} md={12}>
                       <Typography variant={"h4"}>
                           About hammerdirt
                       </Typography>
                       <Typography variant={"body1"}>
                           <p>
                               Hammerdirt was started in 2014. A response to the alarming rates of plastic pollution in the ocean. At that
                               time the crisis was focussed on the Pacific and Atlantic gyres, not upstream in Switzerland. In 2014 there were
                               also changes in the analytics fields and data-science became a common term.
                           </p>
                           <p>
                               Hammerdirt is a non-profit association that collects and manages observations. These observations
                               are primarily in the environmental domain. Our biggest project to date was IQAASL, the national
                               litter survey of Swiss rivers and lakes. This project was mandated by the federal government, the report
                               gave rise to a <a href={"https://www.bafu.admin.ch/bafu/fr/home/themes/dechets.html"}> dedicated theme </a>
                               within the Swiss Federal Office of the Environment.
                           </p>
                           <p>
                               A study that was completed and academically published was the key element in getting the lakes largest festival
                               to monitor quality durring the event ( link to newspaper article:
                               <a href={"https://www.20min.ch/fr/story/pics-de-pollution-du-lac-pendant-le-montreux-jazz-111145484690"}> Jazz Fetival </a>). The Montreux
                               Jazz will continue to monitor every year from now on as part of other measures to minimize environmental impact.

                           </p>
                           <p>
                               By consolidating environmental observations at the municipal level we are providing information to local stakeholders that they would not have had
                               otherwise. This can only help the resource allocation and mitigation strategies at the application level.
                           </p>
                       </Typography>
                   </Grid>
                   <Grid container>
                       <Grid item xs={12} md={12}>
                           <Grid container>
                               <Grid item xs={6} md={6}>
                                   <Typography variant={"h5"}>
                                       Manager: Roger Erismann
                                   </Typography>
                                   <Typography variant={"body1"} component={"span"}>
                                       <p>
                                           Roger manages the daily operations, the "Dev" and "Analyst" roles.
                                       </p>
                                       <p>
                                           Roger is the founder of hammerdirt. He has a BA in Economics from Missouri University of Science and Technology and
                                           an MBA from Webster University.
                                       </p>
                                   </Typography>
                                   <Box sx={{display: {xs: 'none', md:'block'}}}>
                                        <Typography variant={"body1"} component={"span"}>
                                           <p>
                                               A fullstack developer by necessity, Roger works with Python, JavaScript, R and Node on a daily basis.
                                               hammerdirt does not provide a salary unless there is an acitve project. However one of the benefits is
                                               a subscription to Coursera and PackT to help keep up with changes in the domain.
                                           </p>
                                        </Typography>
                                    </Box>
                               </Grid>
                               <Grid item xs={6} md={6} align={"center"}>

                                       <AnImageBox {...SomeImageProps} />

                               </Grid>
                               <Grid item xs={12} md={12}>
                                    <Typography variant={"h4"}>

                                        hammerdirt references
                                    </Typography>
                                   <Typography variant={"body1"} component={"span"}>
                                       <ul>
                                           <li>
                                               FOEN/BAFU, Section: Municipal waste Amanda Finger, Samuel Anrig
                                           </li>
                                           <li>
                                               Association pour le Sauvetage du Léman, Adrien Bonny

                                           </li>
                                           <li>
                                               Summit Foundation: Olivier Kressmann
                                           </li>
                                           <li>
                                               Paul Scherer Institute: Christian Ludwig
                                           </li>
                                       </ul>
                                   </Typography>

                               </Grid>

                           </Grid>
                            <Box sx={{display: {xs: 'block', md:'none'}}}>
                           <Typography variant={"body1"}>
                               <p>
                                   The applications we use and the reporting methods are designed so that a relatively
                                   few amount of people can be responsible for large geographic areas. The development
                                   and testing of those systems are Rogers responsibility.
                               </p>
                               <p>
                                   A fullstack developer by definition, Roger works with Python, JavaScript, R and Node on a daily basis.
                                   While not able to provide salary, hammerdirt does provide a subscription to Coursera and PackT to ensure that
                                   we are always following best practices.
                               </p>
                           </Typography>
                            </Box>
                       </Grid>

                       <Grid item xs={12} md={12}>
                           <Typography variant={"h4"}> hammerdirt alumni </Typography>
                           <Typography variant={"body1"}>
                               <p>
                                   Alumni is a person who takes a hammerdirt project to completion. Our projects require a mix of mental
                                   and physical stamina, some projects can take years to complete.
                               </p>
                           </Typography>
                               <Typography variant={"pink"}>
                                   <p>
                                       While we do the redesign we are confirming the bios and the contact information of alumni.
                                   </p>
                               </Typography>

                       </Grid>
                   </Grid>
               </Grid>
          </Grid>
        </Grid>
    )
}