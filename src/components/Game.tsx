import React, { useEffect, useState, useCallback } from 'react';
import './Game.css';

const Paddle = ({ top, left, right }) => {
  const style = {
    top: `${top}px`,
    left: left ?? undefined,
    right: right ?? undefined,
  };
  return <div className={`paddle ${left ? 'left-paddle' : right ? 'right-paddle' : ''}`} style={style} />;
};

const Ball = ({ top, left }) => {
  return (
    <div
      className="ball"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute'
      }}
    />
  );
};

const Game = () => {
  const [leftPaddleY, setLeftPaddleY] = useState(150);
  const [rightPaddleY, setRightPaddleY] = useState(150);
  const [ballPosition, setBallPosition] = useState({ x: 290, y: 190 });
  const [showGoalOverlay, setShowGoalOverlay] = useState(false);
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [socket, setSocket] = useState(null);

  const keyMap = {
    'w': { side: 'left', deltaY: -40 },
    's': { side: 'left', deltaY: 40 },
    'o': { side: 'right', deltaY: -40 },
    'l': { side: 'right', deltaY: 40 },
  };

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws/game/');
    ws.onopen = () => {
      console.log("WebSocket connection established");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.paddles) {
        setLeftPaddleY(data.paddles.left.y);
        setRightPaddleY(data.paddles.right.y);
      }
      if (data.ball) {
        setBallPosition(data.ball);
	setLeftScore((prevScore) => prevScore + 1);
	setRightScore((prevScore) => prevScore + 1);

      }
      if (data.type === 'goalScored') {
        setShowGoalOverlay(true);
        setTimeout(() => setShowGoalOverlay(false), 1500);
      }
    };

    ws.onclose = () => console.log("WebSocket connection closed");
    ws.onerror = error => console.error("WebSocket error:", error);

    return () => ws.close();
  }, []);

  const handleKeyPress = useCallback((event) => {
    const action = keyMap[event.key];
    if (action && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(action));
    }
  }, [socket]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="container">
     <h1>Welcome to Pong!</h1>
     <div className="scoreboard">
     <div><h3>Player 1 Score: {leftScore} Player 2 Score: {rightScore}</h3></div>
     </div>
     <div className="pong-container">
      <div className="game-area">
        <Paddle top={leftPaddleY} left="20px" />
        <Paddle top={rightPaddleY} right="20px" />
        <Ball top={ballPosition.y} left={ballPosition.x} />
        {showGoalOverlay && (
          <div className="goal-overlay">
            <p className="goal-text">GOAL!</p>
          </div>
        )}
      </div>
    </div>
   </div>
  );
};

export default Game;
