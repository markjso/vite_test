import './App.css'
import  Game  from './components/Game'
import Leaderboard from './components/Leaderboard'
import { Result } from './components/Result'

const App: React.FC = () => {
    let results: Array<Result> = [];
    
    let result: Result [] = [
    {id: "1", name: "Jack", score:"8"},
    {id: "2", name: "Jill", score:"3"},
    {id: "3", name: "Polly", score: "10"},
    {id: "4", name: "Mary", score: "5"},
    {id: "5", name: "Tom", score: "7"},		
];

    results.push(...result);

 return (
  <div className="App">
   <div className="navbar">
    <ul>
     <li>Home</li>
     <li>Game</li>
    </ul>
   </div>
    <Game />
    <Leaderboard results={results} />		
  </div>
 );
};

export default App
