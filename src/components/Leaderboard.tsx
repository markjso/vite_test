import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'; // Assuming you're using Material-UI components

interface Props {
  results: Array<Result>; // Assuming Result is an interface or type defined elsewhere
}

const Leaderboard: React.FC<Props> = (props) => {
  const { results } = props;

  const listItems = results.map((result: Result) =>
    <TableRow key={result.id}>
      <TableCell component="th" scope="row">{result.id}</TableCell>
      <TableCell>{result.name}</TableCell>
      <TableCell>{result.time}</TableCell>
    </TableRow>
  );

  return (
   <div className="leaderboard-container">
    <h1>Leaderboard</h1>		
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems}
        </TableBody>
      </Table>
    </Paper>
   </div>
  );
};

export default Leaderboard;

