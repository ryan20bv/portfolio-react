import React, { useRef, useEffect } from "react";
import useSimon from "./assets/hooks/use-simon";
import classes from "./assets/styles/simon.module.css";
const SimonGame = () => {
	const greenRef = useRef();
	const redRef = useRef();
	const yellowRef = useRef();
	const blueRef = useRef();
	const wrongRef = useRef();
	const infoRef = useRef();

	const {
		samplePlay,
		playStartHandler,
		playerClickHandler,
		level,
		computerArray,
		index,
		isGameOver,
		playerTurn,
		computerTurn,
		clearTimerHandler,
		timerValue,
	} = useSimon(greenRef, redRef, yellowRef, blueRef, wrongRef, infoRef);
	useEffect(() => {
		samplePlay();
	}, []);
	useEffect(() => {
		console.log(computerArray);
	}, [computerArray]);
	return (
		<main className={classes.simon}>
			<section className={classes.first}>
				<h1>SIMON</h1>
			</section>
			<section className={classes.playArea}>
				<button className={classes.start} onClick={playStartHandler}>
					{isGameOver && "Game Over"}
					{!isGameOver && playerTurn && "Player Turn"}
					{!isGameOver && computerTurn && "Computer Turn"}
					{!isGameOver && !computerTurn && !playerTurn && "Press To Start"}
				</button>
				<div className={classes.wrapper} ref={wrongRef}>
					<div className={classes.info} ref={infoRef}>
						<h1>
							Level <span>{level}</span>
						</h1>

						<p className={classes.timer}>{timerValue}</p>
					</div>
					<div className={classes.playDiv}>
						<div
							className={classes.button}
							id='green'
							ref={greenRef}
							onClick={playerClickHandler}
						></div>
						<div
							className={classes.button}
							id='red'
							ref={redRef}
							onClick={playerClickHandler}
						></div>
						<div
							className={classes.button}
							id='yellow'
							ref={yellowRef}
							onClick={playerClickHandler}
						></div>
						<div
							className={classes.button}
							id='blue'
							ref={blueRef}
							onClick={playerClickHandler}
						></div>
					</div>
				</div>

				<footer>@2022</footer>
			</section>
			<section className={classes.last}>
				<h1>GAME</h1>
			</section>
		</main>
	);
};

export default SimonGame;
