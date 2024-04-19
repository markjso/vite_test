import React from 'react';

const Game: React.FC = () => {
  return (
    <div className="container">
      <div className="game">
        <h1>Welcome to Pong!</h1>
	 <h2>Score</h2>
	  <p>Player 1: 0  Player 2: 1</p>
        <div className="image-container">
          <a href="https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png" alt="Pong" style={{ width: '800px', height: '338px' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;

