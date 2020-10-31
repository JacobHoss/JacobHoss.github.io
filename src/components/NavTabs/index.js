import React from 'react';
import { Link, useLocation } from "react-router-dom";
import PDF from '../../pdf/resume.pdf';

function NavTabs() {
	const location = useLocation();
	const [isActive, setisActive] = React.useState(false);

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a
					onClick={() => {
						setisActive(!isActive);
					}}
					role="button"
					className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div
				id="navbarBasicExample"
				className={`navbar-menu ${isActive ? "is-active" : ""}`}
			>
				<div className="navbar-start">
					<div className="navbar-item is-size-3"><strong>Jacob Hoss</strong></div>
					<a className="navbar-item">
						<Link to="/" className={location.pathname === "/"}>
							About Me
        					</Link></a>
					<a href={PDF} target="_blank" className="navbar-item">
						<strong>Resume</strong>
        					</a>
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
		</nav>
	);
}

export default NavTabs;