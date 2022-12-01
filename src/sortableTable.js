import React, { useState, useEffect, Fragment }from "react";
import grandLacSensors from './data/grand_lac.json';
import citySensor from './data/city_sensor.json'
import regionCity from './data/region_city.json'
import grandLacCities from './data/grand_lac_municipal.json';
import grandLacSummary from './data/grand_lac_summary.json';
import petiteLacSensors from './data/petite_lac.json';
import petiteLacSummary from './data/petite_lac_summary.json';
import petiteLacCities from './data/petite_lac_municipal.json';
import hautLacSensors from './data/haut_lac.json';
import hautLacSummary from './data/haut_lac_summary.json';
import hautLacCities from './data/haut_lac_municipal.json';
import {Container} from "@mui/material";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Grid, ListItem} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: {index},
    'aria-controls': `data-${index}`,
  };
}




export function PredictionGrid () {

    const [region, setRegion] = useState('grand-lac');
    const [city, setCity] = useState('Saint-Sulpice (VD)');
    const [theCities, setTheCities] = useState(['Saint-Sulpice (VD)'])
    const [sensor, setSensor] = useState('parc-des-pierrettes');
    const [sensors, setSensors] = useState(['parc-des-pierrettes']);
    const [sSummary, setSsummary] = useState(['none'])
    const [rSummary, setrSummary] = useState(grandLacSummary)
    const [cSummary, setcSummary] = useState(["none"])
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const regions = [
        "grand-lac",
        "haut-lac",
        "petite-lac"
    ]


    const regionSensorData = {
        'grand-lac': grandLacSensors,
        'petite-lac': petiteLacSensors,
        'haut-lac': hautLacSensors
    }
    const regionSummaries = {
        "grand-lac": grandLacSummary,
        "petite-lac": petiteLacSummary,
        "haut-lac": hautLacSummary


    }
    const citySummaries ={
        "grand-lac": grandLacCities,
        "petite-lac": petiteLacCities,
        "haut-lac": hautLacCities

    }

    function cityToSensors(city) {

        setSensors(citySensor[city])

    }

    function numberOfSamples(sensorData) {
        let somedata = sensorData.reduce((acc, sdata) => acc + parseInt(sdata.obs_n_samps), 0)
        return (
            <li>Number of samples: {somedata}</li>
        )


    }

    function getASensor(e){
        return regionSensorData[region].filter((x) => x.sensor == e)
    }
    function handleChangeSensor(e){
        let nsensor = e.target.value
        let nsummary = getASensor(nsensor)
        setSsummary(nsummary)
        setSensor(nsensor)
    }

    function handleChangeCity(e) {
        let ssensors = citySensor[e.target.value];
        let somsummaries = citySummaries[region]
        let acitysummary = somsummaries.filter((x) => x.city == e.target.value)
        cityToSensors(e.target.value);
        setSensor(ssensors[0]);
        setSsummary(getASensor(ssensors[0]))
        setcSummary(acitysummary)
        setCity(e.target.value)
    }

    function handleChangeRegion(e) {
        let nregion = e.target.value;
        let scities = regionCity[nregion];
        let ssensors = citySensor[scities[0]];
        let nSummary = regionSummaries[nregion]
        cityToSensors(scities[0])

        setRegion(nregion);
        setCity(scities[0]);
        setTheCities(scities);
        setSensor(ssensors[0]);
        let asensorsummary = getASensor(ssensors[0])
        setSsummary(asensorsummary)
        setrSummary(nSummary)


    }


    return (
        <Container alignItems={"center"}>
            <Grid container maxWidth={"sm"}>
                <Grid item xs={12} md={4}>
                    <h4>Region</h4>
                    <ButtonGroup orientation={'vertical'} fullWidth={true}>
                            {
                                regions.map((name) =>
                                    <Button
                                        key={name}
                                        value={name}
                                        onClick={(e) => handleChangeRegion(e)}
                                    >
                                        {name}
                                    </Button>)

                            }
                        </ButtonGroup>

                </Grid>
                <Grid item xs={6} md={4}>
                    <h4>City</h4>
                    <ButtonGroup orientation={'vertical'} fullWidth={true}>
                        {
                            theCities.map((name) =>
                                <Button
                                    key={name}
                                    value={name}
                                    onClick={(e) => handleChangeCity(e)}
                                >
                                    {name}
                                </Button>)

                        }
                    </ButtonGroup>
                </Grid>
                <Grid item xs={6} md={4}>
                    <h4>Location</h4>
                    <ButtonGroup orientation={'vertical'} fullWidth={true}>
                        {
                            sensors.map((s) =>
                                <Button
                                    key={s}
                                    value={s}
                                    onClick={(e) => handleChangeSensor(e)}
                                >
                                    {s}
                                </Button>)
                        }
                    </ButtonGroup>
                </Grid>
                <Container sx={{marginTop:5}}>
                <Box sx={{ width: '100%', minWidth:400 }}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="basic tabs example">
                              <Tab label={region} {...a11yProps(0)} />
                              <Tab label={city} {...a11yProps(1)} />
                              <Tab label={sensor} {...a11yProps(2)} />
                            </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}  >
                         <TableContainer component={Paper}>
                                        <Table size="small" aria-label="simple table" >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Code</TableCell>
                                                    <TableCell align="right">average</TableCell>
                                                    <TableCell align="right">20%</TableCell>
                                                    <TableCell align="right">50%</TableCell>
                                                    <TableCell align="right">80%</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rSummary.map((row) => (
                                                    <TableRow
                                                        key={`${row.region}-${row.code}`}
                                                        sx={{'&:last-child td, &:last-child th': {border: 0}, fontSize:10}}
                                                    >
                                                        <TableCell component="th" scope="row" sx={{fontSize:10}} >
                                                            {row.code}
                                                        </TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row.mean).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row["20%"]).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row.median).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row["80%"]).toFixed(2)}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                           <TableContainer component={Paper}>
                                        <Table size="small" aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Code</TableCell>
                                                    <TableCell align="right">average</TableCell>
                                                    <TableCell align="right">20%</TableCell>
                                                    <TableCell align="right">50%</TableCell>
                                                    <TableCell align="right">80%</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {cSummary.map((row) => (
                                                    <TableRow
                                                        key={`${row.region}-${row.code}`}
                                                        sx={{'&:last-child td, &:last-child th': {border: 0}, fontSize:10}}
                                                    >
                                                        <TableCell component="th" scope="row" sx={{fontSize:10}} >
                                                            {row.code}
                                                        </TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row.mean).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row["20%"]).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row.median).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row["80%"]).toFixed(2)}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <TableContainer component={Paper}>
                                        <Table size="small" aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Code</TableCell>
                                                    <TableCell align="right">average</TableCell>
                                                    <TableCell align="right">20%</TableCell>
                                                    <TableCell align="right">50%</TableCell>
                                                    <TableCell align="right">80%</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {sSummary.map((row) => (
                                                    <TableRow
                                                        key={`${row.region}-${row.code}`}
                                                        sx={{'&:last-child td, &:last-child th': {border: 0}, fontSize:10}}
                                                    >
                                                        <TableCell component="th" scope="row" sx={{fontSize:10}} >
                                                            {row.code}
                                                        </TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row.mean).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row["20%"]).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row.median).toFixed(2)}</TableCell>
                                                        <TableCell align="right" sx={{fontSize:10}}>{parseFloat(row["80%"]).toFixed(2)}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                      </TabPanel>
                </Box>
            </Container>
        </Grid>
    </Container>
    )
}
