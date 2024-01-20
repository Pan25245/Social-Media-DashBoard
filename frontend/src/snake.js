import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
    const gridSize = 10; // 10x10 grid
    const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState('RIGHT');
    const [speed, setSpeed] = useState(200);
    const [gameOver, setGameOver] = useState(false);
    const [paused, setPaused] = useState(false);

    const createFood = () => {
        let newX = Math.floor(Math.random() * gridSize);
        let newY = Math.floor(Math.random() * gridSize);
        setFood({ x: newX, y: newY });
    };

    const checkCollision = (head) => {
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            return true;
        }
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    };

    const moveSnake = () => {
        if (gameOver || paused) return;

        let newSnake = [...snake];
        let head = { ...newSnake[0] };

        switch (direction) {
            case 'RIGHT': head.x += 1; break;
            case 'LEFT': head.x -= 1; break;
            case 'UP': head.y -= 1; break;
            case 'DOWN': head.y += 1; break;
            default: break;
        }

        if (checkCollision(head)) {
            setGameOver(true);
            return;
        }

        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            createFood();
            setSpeed(speed => speed * 0.95); // Increase speed
        } else {
            newSnake.pop();
        }
        setSnake(newSnake);
    };

    const handleKeyDown = (e) => {
        if (!paused) {
            switch (e.key) {
                case 'ArrowRight': setDirection('RIGHT'); break;
                case 'ArrowLeft': setDirection('LEFT'); break;
                case 'ArrowUp': setDirection('UP'); break;
                case 'ArrowDown': setDirection('DOWN'); break;
                default: break;
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        const gameInterval = setInterval(moveSnake, speed);

        return () => {
            clearInterval(gameInterval);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [snake, direction, speed, gameOver, paused]);

    const handlePauseClick = () => {
        setPaused(!paused);
    };

    const restartGame = () => {
        setSnake([{ x: 0, y: 0 }]);
        setFood({ x: 5, y: 5 });
        setDirection('RIGHT');
        setSpeed(200);
        setGameOver(false);
        setPaused(false);
    };

    return (
        <div className="snake-game-container">
            <h2>Snake Game</h2>
            {gameOver ? (
                <div>
                    <p>Game Over!</p>
                    <button onClick={restartGame}>Restart</button>
                </div>
            ) : (
                <div>
                    <div className="snake-game-board">
                        {snake.map((segment, index) => (
                            <div key={index} className="snake-segment" style={{ left: `${segment.x * 20}px`, top: `${segment.y * 20}px` }} />
                        ))}
                        <div className="food" style={{ left: `${food.x * 20}px`, top: `${food.y * 20}px` }} />
                    </div>
                    <button onClick={handlePauseClick}>{paused ? 'Resume' : 'Pause'}</button>
                </div>
            )}
        </div>
    );
};

export default SnakeGame;
