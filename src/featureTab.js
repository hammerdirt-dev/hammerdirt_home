import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import lemanMap from "./images/leman_scaled.jpeg";
import React from "react";
import {Typography} from "@mui/material";
import {ActionAreaCard, allProps, APropsCard, cardData, WeNeedHelpCard} from "./modelCards";
import boxplots_most_common from "./images/boxplots_most_common.jpeg"
import results from "./images/results.jpg"
import guessedPredictedFoundsp from "./images/differences_predicted_guessed_sp.jpeg"
import guessedPredictedFoundpp from "./images/differences_predicted_guessed_pp.jpeg"
import regionalBoxplots from "./images/most_common_objects_regional_av.jpeg"
import {BasicTable} from "./tables";
import most_common_json from "./data/most_common_json.json"
import {ResultsTable} from "./tables";
import GuessedPredictedFoundPP from "./data/guessed_predicted_found_pp.json"
import GuessedPredictedFoundSP from "./data/guessed_predicted_found_ps.json"
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {Paper} from "@mui/material";
import {BulletedListItem, NumberedListItem} from "./lists";
import {ThemeProvider} from "@mui/material/styles";
import {ListItem} from "@mui/material";
import List from '@mui/material/List';
import {P} from './thisTheme'
import {
    briefHistoryOfMarineLitter,
    ospar2010Guide,
    unep2008Guide,
    mlwGuide,
    riverineGuide,
    thresholdValues,
    cipel,
    iqaasl,
    asl,
    ThresholdValues,
    WagenigenUniversity,
    VanLoonNbGLM,
    BeachLitterBaselines,
    SharedResponsibility,
    RiverineGuide,
    CoughSyrupExample,
    PyMC,
    Epfl,
    Cipel,
    Asl,
    MlwGuide,
    Iqaasl, Unep2008Guide, Ospar2010Guide, BriefHistoryOfMarineLitter
} from "./webAddresses";


// links



const aBlockOfCode = `
import arviz as az
import pymc as pm
import xarray as xr

def make_a_glm(location, data):
    
    c2 = {"regressor": [location, "city","region:lake"], "obs_idx":data.index}

    with pm.Model(coords=c2) as LakeModelX:
        a = pm.Normal("intercept", mu=0, sigma=1)
        b = pm.Normal("slopes", mu=0, sigma=1, dims="regressor")
        alpha = pm.Exponential("alpha", 1)

        
        C = pm.ConstantData(location, data[location].to_numpy(), dims="obs_idx")
        D = pm.ConstantData("city", data['Saint-Sulpice (VD)'].to_numpy(), dims="obs_idx")
        E = pm.ConstantData("region",  data["grand-lac"].to_numpy(), dims="obs_idx")
        F = pm.ConstantData("lake",  data["lake"].to_numpy(), dims="obs_idx")
        
        λ =pm.Deterministic("param", pm.math.exp(a + b[0]*C + b[1]*D + b[2]*F*E), dims="obs_idx")
        
        y = pm.NegativeBinomial("found", mu=λ, alpha=alpha, observed=data.pcs_m.to_numpy(), dims="obs_idx")

        sampled_r = pm.sample(1000, tune=1000)
        pm.sample_posterior_predictive(sampled_r,extend_inferencedata=True, random_seed=rng)
        
        return sampled_r, LakeModelX`

export function RepoCards (){

    return (
        <>
             <Box sx={{mt:2, mb:2, p:1}}>
                    <h2>
                        Models and Data
                    </h2>
                </Box>
            <ActionAreaCard {...cardData.litterSurveys}/>
            <ActionAreaCard {...cardData.betaBinomial}/>
            <ActionAreaCard {...cardData.negativeBinomial}/>
            <ActionAreaCard {...cardData.florabuckets}/>
            <WeNeedHelpCard />
        </>
)
}
function Introduction(){
    return (
        <>
            <Typography variant={"h5"}>
                INTRODUCTION
           </Typography>

            <P>
                According to a Brief History of Marine Litter, the first scientifically recorded interaction between marine organisms and persistent litter was in 1969. In 1972
                the International Journal of Environmental Studies observed that most of the trash on isolated stretches of ocean shoreline
                was a result of sea‐borne waste stating <i>The waste is primarily a by‐product of international commerce and not the behavior of the casual visitor</i>.
                ( <BriefHistoryOfMarineLitter /> )
            </P>
            <P>
                A few decades passed and the United Nations (UENP) published a first international guide to collecting ocean beach litter in 2008
                ( <Unep2008Guide /> ). The UNEP publication was followed by another guide developed by OSPAR
                in 2010 ( <Ospar2010Guide /> ). The European Union released <i> Guidance on Monitoring Marine Litter in European Seas </i> in 2013
                ( <MlwGuide /> ). <i> Riverine Litter Monitoring - Options and Recommendations </i> was published in 2016, as evidence was mounting
                that rivers are major sources of marine litter <RiverineGuide />. As a result, thousands of observations have been collected
                following two very similar protocols. These data are collected by different organizations, mostly volunteer, throughout the European
                continent. <Typography variant={"pink"}> Each observation is a categorical list of objects and the quantities ( counts ) found of each item within a defined length of shoreline </Typography>.
            </P>
            <P>
                The data collected by volunteers were considered fit for the purpose of establishing beach-litter threshold values by the Marine Litter Technical
                Group of the EU. The threshold value is based on the precautionary principle because there is a lack of quantitative research on the the dose-effect
                relationship between plastic and ecological harm or the adverse socio-economic effects of beach-litter. Threshold values and baselines were suggested
                using the 15th percentile (20 p/100m) from the combined data set of the 2015-2016 beach litter surveys within the EU. ( <ThresholdValues /> )
            </P>

        </>

    )
}

function GlmMathSript (){
    return (
        <div>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="right left right left right left right left right left right left" rowspacing="1em" columnspacing="0em 2em 0em 2em 0em 2em 0em 2em 0em 2em 0em" displaystyle="true">
    <mtr>
      <mtd>
        <mi>Y</mi>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>&#x223C;</mo>
        <mi>N</mi>
        <mi>B</mi>
        <mo stretchy="false">(</mo>
        <mi>&#x03BB;</mi>
        <mo>,</mo>
        <mi>&#x03B1;</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>&#x03B1;</mi>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>&#x223C;</mo>
        <mi>E</mi>
        <mi>x</mi>
        <mi>p</mi>
        <mi>o</mi>
        <mi>n</mi>
        <mi>e</mi>
        <mi>n</mi>
        <mi>t</mi>
        <mi>i</mi>
        <mi>a</mi>
        <mi>l</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>&#x03BB;</mi>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>b</mi>
        <mo>+</mo>
        <msub>
          <mi>&#x03B2;</mi>
          <mn>0</mn>
        </msub>
        <msub>
          <mi>X</mi>
          <mn>0</mn>
        </msub>

      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>b</mi>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>&#x223C;</mo>
        <mi>N</mi>
        <mo stretchy="false">(</mo>
        <mi>&#x03BC;</mi>
        <mo>,</mo>
        <mi>&#x03C3;</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>&#x03B2;</mi>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>&#x223C;</mo>
        <mi>N</mi>
        <mo stretchy="false">(</mo>
        <mi>&#x03BC;</mi>
        <mo>,</mo>
        <mi>&#x03C3;</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math>
        </div>
    )
}


export function FeatureTab() {

    return (
        <Grid container  sx={{maxWidth:{sx:398, md:"auto"}}}>
            <Grid  item xs={12} md={8} sx={{p:1}}>
                <Paper sx={{p:1, mb:2}}>
                    <Box sx={{mt:1}}>
                        <Typography variant={"h5"}>
                            LITTER MONITORING WITH SOLID WASTE ENGINEERS
                        </Typography>

                                <P>
                                    Students from the École Polytechnique Fédérale in Lausanne ( <Epfl /> )
                                    conduct a litter survey on the shoreline of Saint Sulpice, a city on Lake Geneva Switzerland. This
                                    year the new students were asked to estimate how many of each of the most common objects they
                                    would find at the beach, that afternoon. Once the students were divided into two groups, they were
                                    handed a sheet of paper that had the list of the most common objects found on Lake Geneva. They were
                                    instructed to write down what they thought would be the total number of each object they would find.
                                </P>
                            <Typography variant={"pink"} component={"span"}>
                                <P>
                                    This article is a continuation and summary of the first article "Chance of An Encounter", based on identifying the location
                                    with the highest probability of finding a feminine hygiene product on the lake.
                                </P>
                            </Typography>

                    </Box>
                </Paper>
                <Introduction />
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    <Box
                        component="img"
                        sx={{height:"auto",
                            width: {
                                xs:"100%",
                                md: "80%",
                            },
                        }}
                        alt="Map of lake geneva"
                        src={lemanMap}/>
                    <Typography variant={"body2"}>
                        Map of Lake Geneva survey locations from the National Litter Survey
                    </Typography>
                </Box>
                <Typography variant={"h5"} sx={{mt:2}}>
                   LAKE GENEVA AND BEACH LITTER
                </Typography>
                <P>

                       The administration of Lake Geneva is a partnership between France and Switzerland. This partnership
                       is coordinated by <i> La Commission internationale pour la protection des eaux du Léman </i> ( <Cipel /> ), where
                       public officials from both countries share the responsibility of managing the lakes health. Shore-line litter density has not historically
                       been considered an official measure of lake health. The CIPEL does support local NGOS by financing awareness campaigns,
                       organizing large scale clean ups and many other activities. A good example of this partnership is  l’Association pour la Sauvegarde du Léman
                       ( <Asl /> ). The protocol defined in ( <MlwGuide /> )
                       was adopted in 2015 when shoreline litter monitoring was started by the hammerdirt association, this action was never supported by the CIPEL
                       or any other public or private instance until the Swiss Federal Office for the Environment asked for a national survey in 2020.
                       In spite of that, surveys have been conducted continuously on Lake Geneva since 2015. The city of Saint Sulpice is the only city
                       that has survey data in each year. For the period between 2020-03 and 2021-05, a total of 27,462 objects were removed and identified
                       over the course of 98 surveys. The lake Geneva results include 24 different locations in 13 different municipalitie ( <Iqaasl /> ).
                </P>
                <Typography variant={"h5"}>
                    MEASURING PROGRESS TOWARDS REDUCTION GOALS
                </Typography>
                <P>
                    According to <ThresholdValues />, the recommended sampling period for establishing a baseline median value from a set of beach-litter
                    surveys is six years with a recommended minimum of 40 beach litter surveys. The team from Wagenigen Research & University ( <WagenigenUniversity /> )
                    proposed a model using a negative binomial generalized linear model to forecast intermediate measurable targets with respect to the
                    threshold values established with the 2015-2016 data ( <VanLoonNbGLM /> ). The Maximum Likelihood Estimator ( MLE ) of a NB model was proposed
                    as a method for estimating survey results in the swiss national survey ( <BeachLitterBaselines /> ). In both the WRU model and MLE method
                    used on the data from Switzerland it is expected that results from different locations will be pooled together thus producing regional
                    aggregated results. In Switzerland the pooling of survey results is recommended if the locations are in the same catchment area or lake and
                    in the WRU model aggregation is considered on a scale of three - four beaches.
                </P>
                <Typography variant={"h5"}>
                       RESPONDING TO THE NEEDS OF THE LOCAL STAKEHOLDER
                </Typography>

                   <P>
                       In the previous section the models respond to forecasting needs at the regional scale. The lessons learned in Switzerland and specifically on lake Geneva
                       is that the consumers of the data are local stakeholders that are trying to design or implement reduction programs. These programs usually
                       concern a relatively small geographic area and must respond to specific funding requirements that are based on aggregated regional results (previous section). There 554
                       municipalities on lake Geneva ( France and Switzerland ), many of which have at least one beach. The last national survey in Switzerland also demonstrated very different
                       survey results between beaches on the same lake that have three or more surveys. This suggests that the information needs at the municipal level may not be the same as
                       the regional level for locations on the same body of water. This notion becomes more apparent when the results of rural locations are compared
                       to urban locations, where there is a statistical difference in the mix of the objects found ( <SharedResponsibility /> ). Local stakeholders need away to evaluate survey data
                       given the regional data even when there are not 40 - 50 samples for any one location in particular.
                   </P>
                   <P>
                       To illustrate this we consider two real/actual questions about the state of beach litter density from two different cities on Lake Geneva. Neither municipality has
                       40 samples, some locations only have one sample:
                   </P>

                   <List>
                       <ThemeProvider theme={NumberedListItem}>
                       <ListItem>
                           Asked in November 2021: Where in Geneva is a person most likely to find a feminine hygiene product on the shore line this morning?
                       </ListItem>
                        <ListItem>
                            Asked in October 2022: How many of each of the most common items on Lake Geneva is likely to be found at the beach in Saint Sulpice today?
                        </ListItem>
                       </ThemeProvider>
                   </List>

                   <P>
                       In the first case the interlocutor is indifferent to the long term trend line, the total quantity or the average pieces per meter.
                       The request is immediate and the range of possible values is 0 or &gt; 0. The first question could be considered a Bernouli trial of x &gt; 0
                       (True, False) for each survey that was conducted. The complete set of the those trials for any one beach would have a Binomial
                       distribution. Therefore the solution for a region (city, lake) would be the joint probability mass function (PMF) of all surveys
                       from all beaches within the defined region. The Beta distribution is the conjugate prior to the Binomial distribution,
                       both methods are included in python, R and JavaScript.
                   </P>

                    <List sx={{mt:2, mb:2}}>
                       <ThemeProvider theme={BulletedListItem}>
                       <ListItem>
                           We used Bayes Theorem and the Beta - Binomial conjugate relationship to answer this question
                           ( <a href={"https://hammerdirt-analyst.github.io/finding-one-object/titlepage.html"}> Finding FHP </a> ).
                       </ListItem>
                       </ThemeProvider>
                   </List>
                <Typography variant={"h5"}>
                    HOW MANY OF EACH?
                </Typography>

                    <P>
                        The second query is more demanding. There are a variety of objects and the answer requires an estimation of quantity.
                        While the total number of samples on Lake Geneva is 258 since November 2015 there is not a single beach that has the recommended 40 - 50
                        samples. Most have less than ten samples and some only have one or two. Once again the solution for any region or city is the joint PMF
                        of all surveys from all beaches within a region. However the solution must consider all possible survey values of x for each object
                        of interest at each survey location within the geographic limits.
                    </P>
                <Typography variant={"h5"}>
                   METHODS AND PRIOR INFORMATION
                </Typography>
                <P>
                   The municipal results from the national litter survey demonstrate significant differences in the median
                   value for the same objects. For example the median recorded value for fragmented plastics (Gfrags) was ~ 256 p/100m
                   in Saint Gingolph ~ 15 p/100m in Geneva and ~ 172 p/100m in Saint Sulpice. The median for the lake is approximately ~ 61p/100m.
                   The location of the sample is therefore a variable to consider. Gfrags were identified in 96% of all samples and the transport of plastic objects
                   in rivers and lakes has been well documented ( <RiverineGuide /> ). These results are typical for many lakes in Switzerland, forecasting results
                   implies putting a value on forces that are surely there but are yet to be defined numerically.
                </P>
                <Typography variant={"h6"}>
                    SUMMARY OF PRIOR INFORMATION
                </Typography>
                <P>
                   We assume that the beach litter survey results are vectors that describe the interaction/exchange of trash (all sizes &gt; 0mm) between
                   the survey location and the body of water it borders. <i>Body of water</i> refers to areas of reduced current flow in a river basin.
                   For example lake Geneva to the Rhône or Bielersee to the Aare. Therefore, the magnitude of the interaction/exchange is quantified by the
                   rate component of the vector that describes the interaction.
                </P>
                <List>
                        <ThemeProvider theme={NumberedListItem}>
                            <ListItem>
                                The survey results represent the minimum possible value for an object. It is certain that not all objects that were present at a
                                location were identified and counted. Furthermore, objects that are found can be misidentified or the wrong code applied to the record upon data entry.
                            </ListItem>
                            <ListItem>
                                There is a relationship to the number of objects suspended in the body of water and the number of objects that are counted and identified
                                in the strand-line at a survey. The number of objects in suspension is unknown.
                            </ListItem>
                            <ListItem>
                                Objects in suspension are transported according to the direction of the river basin, surface currents, wind currents and meteorological events.
                                The magnitude of the exchange of objects between the shoreline and the body of water is also influenced by local topography. The magnitude of this
                                exchange is unknown for the lake in general nor for any location in particular.
                            </ListItem>
                            <ListItem>
                                 Each location or beach produces/emits particles that are exchanged with the lake. Those particles get transported according to 3.
                            </ListItem>
                            <ListItem>
                                Storm water drains, streams, rivers and canals ( hydrological inputs ) are sources of particles in suspension. The number and size of hydrological inputs is a
                                factor in the number of particles in suspension for a  body of water.
                            </ListItem>
                        </ThemeProvider>
                </List>
                <P>
                   The magnitude of the <i>trash</i> vector is the result of many interactions. One possible method to forecasting could be to calculate the number of particles in suspension and
                   then from there quantify the transfer rate etc. This would be helpful information but is not strictly required. From a resource perspective this would require that three additional
                   sources of information (for each quantified interaction) be maintained and accessible for each location so that forecasting could be accomplished. None of which currently exist at
                   a required precision level for any specific location. The question is about the magnitude of the trash and not any other attribute, for this there is direct evidence.
                   The shortcomings or bias of this evidence is summarized in 1.
                </P>
                <P>
                    The Negative Binomial distribution has been suggested by WRU and the JRC when calculating trend lines using a Generalized Linear Model (GLM) or identifying extreme values from a dataset ( JRC ).
                    The GLM method proposed by WRU uses the survey totals and sub-group totals to determine trend lines, with the recommendation to use objects that are identified frequently.
                    The example in the report is Single Use Plastics (SUPS). This method does not exclude any survey results and is constrained geographically.
                </P>
                <P>
                    <strong>Model:</strong> Given conditions 2-5 we assume that the survey results for the most common objects are NB distributed with parameters &#x03B1; and &#x03BB;.
                    &#x03B1; is Exponentially distributed with parameter <i>i</i> and &#x03BB; is the result of a linear approximation of <i>B<sub>i</sub></i>, <i>X<sub>i</sub></i>. <i>B</i> is
                    the intercept and <i>B<sub>i</sub></i> is the magnitude of the interaction term for the undefined values previously cited. Both are assumed normally distributed for any
                    individual location or region.
                </P>
                <GlmMathSript />
                <P>
                    For this example the model was implemented in PyMC ( <PyMC /> ). This model was inspired by the <i>cough syrup example</i> ( <CoughSyrupExample /> ), we consider each different geographic
                    group as a potential regressor and we consider all geographical groups that include the locations of interest.
                </P>
                <SyntaxHighlighter children={aBlockOfCode} language="python" style={dracula} />
                <Typography variant={"h6"}>
                    INTENDED USE, CONDITIONS OF SUCCESS, MODEL EVALUATION
                </Typography>
                <P>
                    The intended purpose of the model is to allow end users to consult current and predicted values for any number of reasons. This includes planning a day
                    at the beach or estimating results in relation to a target value. Our conditions of success are focussed on practicality, implementation and scalability.
                    The accuracy of any model should be simple to test and the results of those tests should be easy to communicate. The difference of the forecasted values to
                    the observed values is the best measure of accuracy, minimizing this value is the goal of any model.
                </P>
                <P>
                    The conditions of success at this stage of model development are defined below.
                </P>
                <List>
                    <ThemeProvider theme={NumberedListItem}>
                        <ListItem>
                            On average have a better prediction rate than a random guess
                        </ListItem>
                        <ListItem>
                            The forecast describes a compromise between the city and the subregion
                        </ListItem>
                        <ListItem>
                            Predicted values are reasonable compared to historical results
                        </ListItem>
                    </ThemeProvider>
                </List>
                <P>
                    The minimum requirements above apply to any model. The proposed model is one of many possible solutions
                    that will be evaluated. The initial evaluation period is expected to last 18 months.
                </P>
                <Typography variant={"h5"}>
                    PRIOR DATA: DEFINITION, SUMMARY
                </Typography>
                <P>
                   The most common items identified on Lake Geneva are those items that are either among the top ten objects by quantity or objects that were found in at least 50% of the surveys.
                   The most common objects from the 2020 - 2021 survey are detailed in table 2. As a group, the most common items represent ~ 75% of of all objects identified on the lake that period.
                   The Fail-rate is the ratio of the number of samples where the object was found to the total number of samples. Consider codes G112 and G95, G95 was identified in 81% of the samples
                   v/s 46% of samples for G112, yet more of G112 were identified as opposed to G95. In other words G95 is found more often but in smaller quantities than G112 and when G112
                   is identified there are relatively important quantities. Recall that a beach litter survey is an accounting of the objects identified. It is certain that some objects are not
                   "found" or that some objects may be miss-identified. Point value estimates or ranges should be considered a MINIMUM expected value.
                </P>
                <Box sx={{p:3}}>
                    <BasicTable {...most_common_json} />
                </Box>
                <P>
                   Most of the objects on the list from 2020-2021 have a relatively low expected p/m, the exceptions are cigarette filters, candy wrappers, cotton buds, fragmented foams and fragmented plastics.
                   Considering all the data since 2015, it appears that the those same items are responsible for significant amount of the variance and quantity.
                </P>
                <Box sx={{p:1}} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    <Box
                        component="img"
                        sx={{
                            height:"auto",

                         width: {
                                xs:"100%",
                                md: "80%",
                            },

                        }}
                        alt="distribution of the most common items: box plots"
                        src={boxplots_most_common}/>
                    <Typography variant={"body2"}>
                       The distribution of the most common objects on Lake Geneva
                    </Typography>
                </Box>
                <P>
                    The variance of the survey results increases with the required geographical precision of the assessment. This relationship is in part due to the decreasing number of samples per region or sub region,
                    ie. there are 250 surveys for the lake and only 15 for Saint Sulpice. The average pcs/100m at Saint Sulpice is double that of the lake, while the average of the grand-lac is very close to the lake.
                </P>
                 <Box sx={{p:1}} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    <Box
                        component="img"
                        sx={{
                            height:"auto",

                          width: {
                                xs:"100%",
                                md: "80%",
                          },

                        }}
                        alt="distribution of the most common items: box plots"
                        src={regionalBoxplots}/>
                    <Typography variant={"body2"}>
                       The distribution of the most common objects on Lake Geneva
                    </Typography>
                </Box>
                <Grid container>
                    <Grid container sx={{m:1}}>
                        <Grid item xs={12} md={12} sx={{mt:2}}>
                            <Typography variant={"h5"}>
                                RESULTS: PREDICTED, GUESSED AND FOUND
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} md={12}>
                            <P>
                                The results are separated by beach (tables below). Definition of values:
                            </P>
                            <List>
                                <ThemeProvider theme={BulletedListItem}>
                                    <ListItem>
                                        Average prediction: The average of the posterior predictive distribution
                                    </ListItem>
                                    <ListItem>
                                        Average guess: The average of the guessed values in pcs/100m
                                    </ListItem>
                                    <ListItem>
                                        Found: The number found by the students in pcs/100m
                                    </ListItem>
                                    <ListItem>
                                        Predicted diff: Average prediction - Found
                                    </ListItem>
                                    <ListItem>
                                        Guessed diff: Average guess - Found
                                    </ListItem>
                                </ThemeProvider>
                            </List>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={5} sx={{m:1, p:1}} >
                                <h4>
                                    Parc des Pierrettes
                                </h4>
                                <ResultsTable {...GuessedPredictedFoundPP} />

                            </Grid>
                            <Grid item xs={12} md={5} sx={{m:1, p:1}}>
                               <h4>
                                  Plage de Saint Sulpice
                               </h4>
                               <ResultsTable {...GuessedPredictedFoundSP} />
                            </Grid>
                    </Grid>
                        <Grid item  xs={12} md={12}>
                            <P>
                                On average the student guesses at plage-de-st-sulpice and parc-des-pierrettes were greater than the predictions. This metric can be calculated directly
                                by taking the absolute value of the -diff columns and summing each column. At plage-de-saint-sulpice the total guessed-diff is 1504 vs 736 predicted-diff,
                                which means that the predicted were on average ~ 50% closer to the observed value. However, 5 of the guessed values were closer to the observed values.
                                The results at Saint Sulpice are similar, 1524 guessed compared to 859 predicted and 5 of the guessed values were closer to the observed values.
                            </P>
                        </Grid>
                        <Grid item  xs={12} md={12} sx={{p:1}}>
                            <Box
                                component="img"
                                sx={{
                                    height:"auto",
                                    width:"100%",
                                    }}
                                xs={12}
                                md={8}
                            alt="The predicted values versus the guessed and what was found"
                            src={guessedPredictedFoundsp}/>
                        </Grid>
                        <Grid item  xs={12} md={12} sx={{p:1}}>
                            <Box
                                component="img"
                                sx={{
                                    height:"auto",
                                    width:"100%",
                                    }}
                                xs={12}
                                md={8}
                            alt="The predicted values versus the guessed and what was found"
                            src={guessedPredictedFoundpp}/>
                        </Grid>
                    </Grid>
                    <Box display={"flex"} alignItems={"center"} flexDirection={"column"} sx={{mb:2}}>
                        <Box
                            component="img"
                            sx={{
                                height:"auto",
                                width:"100%",

                            }}
                            alt="Predictions, observations and guesses chart of experiment results"
                            src={results}/>
                        <Typography variant={"body2"}>
                           Intital test of the beach recommender
                        </Typography>
                    </Box>
                    <Box sx={{mt:4, mb:2}}>
                    <Typography variant={"h5"}>
                       DISCUSSION: GUESS OR ESTIMATE? POINT VALUES OR GRADIENTS?
                    </Typography>
                    </Box>

                        <P>
                            From this small study the evidence is in favor of the model based prediction. On average the predictions were more accurate
                            than a guess, 38/48 predictions were closer to the test value ( ~ 79% ). The predicted values are actually very close to the
                            mean of the prior data for each code. In this example the prior includes all the results for the lake since 2015.
                            In other words, the expected value for the lake was a better predictor than a guess about 80% of the time.
                        </P>
                        <P>
                            The overall performance of the model can be improved by limiting the prior data to those surveys within the grand-lac region.
                            This reduces the sum of prediction-diff to 647 at parc-des-pierrettes and 766 at plage-de-sulpice. Most of those gains are from the
                            10/48 that were out predicted by the students. Note that this did not change the overall performance of ~79%.
                        </P>
                        <P>
                            <Typography variant={"pink"}>Point estimates are misleading </Typography>. Especially if the uncertainty about the estimate is not communicated.
                            If the average of the prior surveys are used then the standard deviation is one way to communicate uncertainty. In this case a probabilistic model
                            was used, which means that for each object there is an array of samples. The point estimate is the mean of that array, the distribution of those
                            samples is the uncertainty about the estimate.
                        </P>
                    <Typography variant={"h5"}>
                       CONCLUSION AND NEXT STEPS
                    </Typography>
                     <P>
                         The proposed model amounts to little more than taking the average from a group of survey results. The average value is a  valid forecast method, however,
                         it can be calculated directly as opposed to a probabilistic model. A hierarchical model may be more appropriate, one that allows for partial pooling of the results
                         and different slopes and intercepts per group.
                     </P>
                    <P>
                        The implementation of the proposed models has two phases, the server side and the client side. The focus on the client side is to communicate the forecasted
                        results as clearly and as quickly as possible. Even though it is doubtful that the current model will be chosen, we can begin the design process for the client
                        side app. The server side involves calculating the forecast and making that information available to clients.
                    </P>
                     <Typography variant={"h5"}>
                       Over the next three weeks the client and server side applications will be developed for this application. Follow along!
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{pt:4}}>
                <RepoCards />

                <Box sx={{mt:2, mb:2, p:1}}>
                    <h2>
                        Resources
                    </h2>
                </Box>

                {
                    allProps.map(aCard => <APropsCard key={aCard.company} {...aCard} />)
                }
            </Grid>
        </Grid>

    )
}
