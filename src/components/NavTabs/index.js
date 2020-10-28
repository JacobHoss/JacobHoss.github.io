import React from 'react';
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
	const location = useLocation();

	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item is-size-3" href="./index.html">
						<strong>Jacob Hoss</strong>
					</a>
					<span className="navbar-burger burger" data-target="navbarMenu">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbarMenu" className="navbar-menu is-size-5 has-text-right">
					<div className="navbar-end">
						<a className="navbar-item">
							<Link to="/" className={location.pathname === "/"}>
								About Me
        					</Link></a>
						<a className="navbar-item">
							<Link to="/resume" className={location.pathname === "/resume"}>
								Resume
        					</Link></a>
						<a className="navbar-item">
							<Link to="/contact" className={location.pathname === "/contact"}>
								Contact
        					</Link></a>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
								<Link to="/portfolio" className={location.pathname === "/portfolio"}>
									Portfolio
        						</Link></a>
							<div className="navbar-dropdown is-size-6">
								<a className="navbar-item" href="https://mighty-mesa-69962.herokuapp.com/" target="_blank">Show
								Me The Brews</a>
								<a className="navbar-item" href="https://nataliegarcia-8.github.io/Domestic-Covid19-TravelApp/"
									target="_blank">COVID-19 Travel App</a>
								<a className="navbar-item" href="https://jacobhoss.github.io/weather-dashboard/"
									target="_blank">Weather Dashboard</a>
								<a className="navbar-item" href="https://jacobhoss.github.io/car-trivia-quiz/"
									target="_blank">Car Trivia Quiz</a>
								<a className="navbar-item" href="https://jacobhoss.github.io/random-password-generator/"
									target="_blank">Random Password Generator</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavTabs;