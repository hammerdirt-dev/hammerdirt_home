import * as React from 'react';
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#e5e4e2"
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function BasicTable(table_data) {

  const new_data = Object.values(table_data)

  return (
    <TableContainer >
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Code</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="center">Qty</TableCell>
            <TableCell align="center">p/m</TableCell>
            <TableCell align="center">Fail rate</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {new_data.map(row => (
            <StyledTableRow
              key={`${row.Code}-${row.quantity}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell > {row.Code}  </TableCell>
              <TableCell align="left">{row.Description}</TableCell>
              <TableCell align="center">{row["N pieces"]}</TableCell>
              <TableCell align="center">{row["pcs/m"]}</TableCell>
              <TableCell align="center">{row["Fail rate"]}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export function MakePredictionTables(current_predictions, labels){
//
//
//
//
//
//   return (
//       <BasicTable {...current_predictions } />)
//
//
//
// }

// export function rObjectValues(data){
//     return Object.values((data))
// }


export function ResultsTable(table_data) {

  const new_data = Object.values(table_data)

  return (
    <TableContainer  sx={{p:1}}>
      <Table size="small" aria-label="simple table" sx={{maxWidth:380}}>
        <colgroup>
          <col width="10%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
        </colgroup>
        <TableHead>

            <TableCell align="right">Code</TableCell>
            <TableCell align="center">Average prediction</TableCell>
            <TableCell align="center">Average guess</TableCell>
            <TableCell align="center">Found</TableCell>
           <TableCell align={"center"}>Predicted diff</TableCell>
          <TableCell align={"center"}>Guessed diff</TableCell>


        </TableHead>
        <TableBody>
          {new_data.map(row => (
            <StyledTableRow
              key={`${row.code}-${row.found}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize:12 }}
            >
              <TableCell > {row.code}  </TableCell>
              <TableCell align="left">{Math.round(row["predicted-mean"])}</TableCell>
              <TableCell align="center">{Math.round(row.guessed)}</TableCell>
              <TableCell align="center">{Math.round(row.found)}</TableCell>
              <TableCell align="center">{Math.round(row["predicted-diff"])}</TableCell>
              <TableCell align="center">{Math.round(row["guessed-diff"])}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
