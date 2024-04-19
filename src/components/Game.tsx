import React from 'react';

const Game: React.FC = () => {
  return (
    <div className="container">
      <div className="game">
        <h2>Welcome to Pong!</h2>
        <div className="image-container">
          <a href="https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png" alt="Pong" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;

