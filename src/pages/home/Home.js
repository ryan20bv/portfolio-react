import React from "react";

import Nav from "../../ui/Nav";

import classes from "./home.module.css";
const Home = () => {
	return (
		<div className={classes.home}>
			<Nav
				head='Ryan Valenzuela'
				fontFamily='Great Vibes'
				headColor='white'
				listColor='red'
				addedClass={classes.home_responsive}
			/>
		</div>
	);
};

export default Home;
