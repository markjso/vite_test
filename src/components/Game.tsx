import React from 'react';

const Game: React.FC = () => {
  return (
    <div className="container">
      <div className="game">
        <h2>Welcome to Pong!</h2>
	 <h3>Score</h3>
	  <p>Player 1: 0  Player 2: 1</p>
        <div className="image-container">
          <a href="https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png" alt="Pong" style={{ width: '500px', height: '211px' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;

