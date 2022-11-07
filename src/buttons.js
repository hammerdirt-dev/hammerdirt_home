import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function BasicButtonGroup(props) {
  return (
    <ButtonGroup variant="contained"  color="primary" sx={{m:1, display: "flex", justifyContent:"center", width:"100%"}} aria-label="outlined primary button group">
      <Button href={props.home}  sx={{flexGrow:1}}>Applied</Button>
      <Button href={props.repo} sx={{flexGrow:1}}>Repository</Button>
      <Button href={props.reference} sx={{flexGrow:1}}>Reference</Button>
    </ButtonGroup>
  );
}