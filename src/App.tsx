import './App.css'
import  Game  from './components/Game'
import Leaderboard from './components/Leaderboard'
import { Result } from './components/Result'

const App: React.FC = () => {
    let results: Array<Result> = [];
    
    let result: Result = {
    id: "1",
    name: "Jack",
    time:"8ms"
};

    results.push(result);

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
