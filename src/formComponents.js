import React, { useState } from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import {FormControlLabel, Grid, Typography} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}




export function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}



export function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField label="Filled success" variant="filled" color="success" focused />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  );
};

export function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

function FormTextItem(props){
    return(
        <Grid item md={12} xs={12} sx={{p:1, mb:1}}>

            <TextField
                id={props.id}
                label={props.label}

                placeholder={props.placeHolder}
                value={props[props.id]}

                inputProps={{
                    sx: {

                        "&::placeholder": {
                            color: "#FF00FF"
                        }
                    }
                }}
                onChange={props.handleChange}
            />
        </Grid>
    )

}

export const IsValidEmail = (aString) => /\S+@\S+\.\S+/.test(aString)


export function ControlledCheckbox(props) {
  return (
      <FormControlLabel control={<Checkbox onChange={props.handleChange}/>} label={props.label} />

  );
}

export function ControllingInputWithState(props, state) {
    return (
        <Grid container>
            <Grid item md={6} xs={6}>
                {
                    props.columnOneInputs.map( anInput => <FormTextItem key={"exampleInputOne"} {...anInput} />)
                }
            </Grid>
             <Grid item md={6} xs={6}>
                 {
                    props.rowTwoInputs.map( anInput => <FormTextItem key={"exampleInputTwo"} {...anInput} />)
                }
            </Grid>
        </Grid>

  );
}


