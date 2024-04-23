import React from 'react';
import { Result } from './Result';

interface Props {
  results: Array<Result>;
}

const Leaderboard: React.FC<Props> = (props) => {
  const { results } = props;

  const listItems = results.map((result: Result) => (
    <tr key={result.id}>
      <td>{result.id}</td>
      <td>{result.name}</td>
      <td>{result.wins}</td>
    </tr>
  ));

  return (
   <div className="leaderboard-container">
    <h1>Leaderboard</h1>		
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
   </div>
  );
};

export default Leaderboard;
