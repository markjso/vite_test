import './App.css'
import { Blog } from './components/Blog'
import  Game  from './components/Game'

function App() {

 return (
  <div className="App">
   <div className="navbar">
    <ul>
     <li>Home</li>
     <li>Game</li>
    </ul>
   </div>
    <Blog />
    <Game />	
  </div>
 )
}
export default App
