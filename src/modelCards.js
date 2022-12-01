import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import chance_of_an_encounter from "./images/chance_of_an_encounter_15_0.png"
import poisson_gamma from "./images/poisson_gamma.png"
import flora_buckets from "./images/flora_buckets.jpg"
import iqaasl_map from "./images/iqaasl_map.jpeg"
import BasicButtonGroup from "./buttons";
import Box from '@mui/material/Box';
import {BulletedListItem} from "./lists";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ThemeProvider} from "@mui/material";
import {P} from './thisTheme'

const ModelOne = {
  title: "Beta - Binomial conjugate: whats the chance of finding at least one?",
  subtitle: "The Beta distribution is a conjugate prior to the Binomial distribution",
  approach: "The Binomial distribution measures the chance of an event occurring. In this approach" +
      " we consider the chance that a person will find more than a value x, x takes on any number between 0" +
      " and the maximum ever recorded value for that location. ",
  question: "What is the chance of finding more than x ?",
  repo:"https://github.com/hammerdirt-analyst/finding-one-object",
  home: "https://hammerdirt-analyst.github.io/finding-one-object/titlepage.html",
  reference: "https://en.wikipedia.org/wiki/Conjugate_prior",
  computing: "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.beta.html",
  image: chance_of_an_encounter
}

const ModelTwo = {
  title: "Gamma - Poisson: How many is likely to be found?",
  subtitle: "This is another name for Negative Binomial distribution.",
  approach: "This places a probability on a rate. The rate is assumed to be centered around the" +
      " average survey result.",
  question: "How many of x will most likely be found?",
  repo:"https://github.com/hammerdirt/pgamma",
  home: "https://hammerdirt.github.io/pgamma/",
  reference: "https://projecteuclid.org/journals/bayesian-analysis/volume-1/issue-3/A-comparison-of-Bayesian-and-likelihood-based-methods-for-fitting/10.1214/06-BA117.full",
  computing: "https://docs.pymc.io/en/v3/pymc-examples/examples/case_studies/multilevel_modeling.html",
  image: poisson_gamma
}

const ModelBioDiversity = {
  title: "Documenting urban botanical biodiversity",
  subtitle: "Data collected by while preparing for the Swiss botanical society exam.",
  approach: "The objective of this report was to construct an initial dataset on the flowering plant" +
      " populations growing in different green spaces around the city of Biel/Bienne. Data was uploaded" +
      " to InfoFlora",
  question: "What are most abundant plant species in Biel?",
  repo:"https://github.com/thorerismann/flora-buckets",
  home: "https://thorerismann.github.io/flora-buckets/intro.html",
  reference: "https://www.infoflora.ch/en/,",
  computing: "https://scipy.org/",
  image: flora_buckets
}



const LitterSurvey = {
  title: "Identification and Quantification of litter density",
  subtitle: "Data collected for the Swiss national litter survey",
  approach: "The aim of the project was to collect data and develop the necessary infrastructure" +
      " to accurately assess the composition and abundance of litter along selected Swiss rivers and lakes.",
  question: "What are we likely to find, on average ?",
  repo:"https://github.com/hammerdirt-analyst/IQAASL-End-0f-Sampling-2021",
  home: "https://hammerdirt-analyst.github.io/IQAASL-End-0f-Sampling-2021/esummary.html",
  reference: "https://www.bafu.admin.ch/bafu/fr/home/themes/dechets.html",
  computing: "https://scipy.org/",
  image: iqaasl_map
}

export const cardData = {
  betaBinomial: ModelOne,
  negativeBinomial: ModelTwo,
  florabuckets:ModelBioDiversity,
  litterSurveys: LitterSurvey

}

export function ActionAreaCard(props) {
  return (
      <Card sx={{mt:2, borderWidth:"medium" }}>
        <CardActionArea href={props.home} >
            <CardContent>
                <Typography variant={"h6"} gutterBottom component="div">
                    {props.title}
                </Typography>
            </CardContent>
            <Box sx={{display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"center"}}>
                <CardMedia
                    component="img"
                    height="auto"
                    sx={{maxWidth:"80%"}}
                    image= {props.image}
                    alt="subject of interest"
                />
            </Box>
        </CardActionArea>
        <CardContent>

                <P>
                    
                    {props.approach}
                      
                </P>

            <BasicButtonGroup {...props} />
        </CardContent>
    </Card>
  );
}


const skillsFrontEnd = () => (
    <>
        <P>
            
                Emphasize D3(4) skills and implement Material UI. We have alot of data and visualisations are a key elemennt.
                The design of the front end will take advantage of our experience in data science.
            
        </P>
        <List>
            <ThemeProvider theme={BulletedListItem}>
                <ListItem>
                    Javascript: ReactJS, Express, D3/4, Node
                </ListItem>
                <ListItem>
                    PostgreSQL: Management and automation
                </ListItem>
                <ListItem>
                    Server management: Debian, NGINX, DOCKER
                </ListItem>
            </ThemeProvider>
        </List>

    </>
)




const skillsApi = () => (
    <>
        <P>
            Facilitate searching and standardize the architecture. Connect to Oauth and enforce two factor authentication.
            Define executable endpoints for probabilistic models.           
        </P>
        <List>
            <ThemeProvider theme={BulletedListItem}>
                <ListItem>
                    Python: Django, Django REST,
                </ListItem>
                <ListItem>
                    PostgreSQL: Database management
                </ListItem>
                <ListItem>
                    Server management: Debian, NGINX
                </ListItem>
            </ThemeProvider>
        </List>

    </>
)

const testTheGlm = () => (
    <>
        <P>
            We are developing several probabilistic models based on the litter data. In this early phase data is collected
            by a small group of people. If you would like to check the probability of trash contact dev at hammerdirt.            
        </P>
        <List>
            <ThemeProvider theme={BulletedListItem}>
                <ListItem>
                    Must be physically fit, able to work outdoors
                </ListItem>
                <ListItem>
                    Basic knowledge of Python, Git
                </ListItem>
                <ListItem>
                    Interest in math, statistics
                </ListItem>
            </ThemeProvider>
        </List>
    </>
)

const HelpApi = {
  title: "Redesign of the API",
  approach: skillsApi(),
  question: "What are we likely to find, on average ?",
  repo:"https://github.com/hammerdirt-dev/hammerdirt_api",
  home: "https://github.com/hammerdirt-dev/hammerdirt_api",

}

const HelpFrontEnd = {
  title: "Redesign of the front end",
  approach: skillsFrontEnd() ,
  question: "What are we likely to find, on average ?",
  repo:"https://github.com/hammerdirt-dev/hammerdirt_home",
  home: "https://github.com/hammerdirt-dev/hammerdirt_home",

}

const HelpNb = {
  title: "Testing the litter GLM",
  approach: testTheGlm(),
  question: "What are we likely to find, on average ?",
  repo:"https://github.com/hammerdirt-analyst",
  home: "https://github.com/hammerdirt-analyst",

}

export const help_us_data = {
  helpFrontEnd: HelpFrontEnd,
  helpApi: HelpApi,
  helpNb:HelpNb


}


export function SimpleCard(props) {
  return (

    <Card variant="outlined"  sx={{mt:2, mb:2, borderWidth:"medium",}}>
      <CardActionArea href={props.repo}>
          <CardContent>
              <h2>
                  {props.title}
              </h2>
            {props.approach}
        </CardContent>
      </CardActionArea>

    </Card>

  );
}


export function WeNeedHelpCard(){
    return(
          <Card variant="outlined" >
              <CardContent>
                  <Typography gutterBottom variant={"h6"} component="div">
                      We are looking for serious partners to help us expand data services and monitoring.
                  </Typography>
                  <P>
                      At hammerdirt we believe that the value of the organisation is entirely represented by the
                      value of the members.
                  </P>

            </CardContent>
          </Card>
        )

}

export function APropsCard(props) {
  return (
      <Card variant="outlined"  sx={{m:1, borderWidth:"medium",}}>
          <CardActionArea href={props.webaddress}>
              <CardContent>
                  <Typography gutterBottom variant="blueSmall"
                  >
                          {props.company}

                  </Typography>
                  <Box sx={{mb:2}}>
                      <Typography
                          sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              WebkitBoxOrient: "vertical",
                              mb:2
                               }}>

                              {props.description}

                      </Typography>
                  </Box>
              </CardContent>
          </CardActionArea>
      </Card>

  );
}

export const aAprop = {
    company:"Material UI",
    description:"MUI offers a comprehensive suite of UI tools to help you ship new features faster." +
        " Start with Material UI, our fully-loaded component library, or bring your own design system" +
        " to our production-ready components.",
    webaddress: "https://mui.com/"
}

export const aSecondProp = {
    company:"React",
    description:"React makes it painless to create interactive UIs. Design simple views for each state" +
        " in your application, and React will efficiently update and render just the right components" +
        " when your data changes.",
    webaddress: "https://reactjs.org/"
}

export const aThirdProp = {
        company:"JavaScript ",
    description:"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with " +
        "first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser" +
        " environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based," +
        " multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative " +
        "(e.g. functional programming) styles. Read more about JavaScript.",
    webaddress: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"

}
export const aFourthProp = {
        company:"Node JS",
    description:"As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network" +
        " applications. Many connections can be handled concurrently." +
        " Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.",
    webaddress: "https://nodejs.org/en/about/"

}

export const aFifthProp = {
        company:"Debian",
    description:"Debian is a Linux-based operating system for a wide range of devices including laptops, desktops and servers." +
        " We provide a reasonable default configuration for every package as well as regular security updates during the packages'" +
        " lifetimes.",
    webaddress: "https://www.debian.org/"

}

export const aSixthProp = {
    company:"Python",
    description:"Python is  a high-level, general-purpose programming language. Its design philosophy emphasizes code " +
        "readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. " +
        "It supports multiple programming paradigms, including structured (particularly procedural), " +
        "object-oriented and functional programming. It is often described as a 'batteries included' language due to" +
        " its comprehensive standard library.",
    webaddress: "https://www.python.org/about/"

}

export const aSeventhProp = {
    company:"Scipy",
    description:"SciPy provides algorithms for optimization, integration, interpolation, eigenvalue problems, algebraic" +
        " equations, differential equations, statistics and many other classes of problems.",
    webaddress: "https://scipy.org/"

}

export const anEigthprop = {
    company:"PyMC",
    description:"PyMC is a probabilistic programming library for Python that allows users to build Bayesian models with" +
        " a simple Python API and fit them using Markov chain Monte Carlo (MCMC) methods.",
    webaddress: "https://www.pymc.io/welcome.html"

}
export const aNinthprop = {
    company:"pandas",
    description:"pandas aims to be the fundamental high-level building block for doing practical, real world data " +
        "analysis in Python. Additionally, it has the broader goal of becoming the most powerful and flexible open " +
        "source data analysis / manipulation tool available in any language.",
    webaddress: "https://pandas.pydata.org/about/index.html"

}

export const aTenthprop = {
    company:"statsmodels",
    description:"statsmodels is a Python module that provides classes and functions for the estimation of many different" +
        " statistical models, as well as for conducting statistical tests, and statistical data exploration. An extensive" +
        " list of result statistics are available for each estimator.",
    webaddress: "https://www.statsmodels.org/stable/index.html"

}

export const anEleventhProp = {
    company:"djangoRest",
    description:"Django REST Framework Django REST framework is a powerful and flexible toolkit for building Web APIs.",
    webaddress: "https://www.django-rest-framework.org/#quickstart"

}

export const aTwelthProp = {
    company:"Django",
    description:"Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. " +
        "Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on " +
        "writing your app without needing to reinvent the wheel. It’s free and open source.",
    webaddress: "https://www.djangoproject.com/"

}

export const allProps = [
    aAprop,
    aSecondProp,
    aThirdProp,
    aFourthProp,
    aFifthProp,
    aSixthProp,
    aSeventhProp,
    anEigthprop,
    aNinthprop,
    aTenthprop,
    anEleventhProp,
    aTwelthProp
]