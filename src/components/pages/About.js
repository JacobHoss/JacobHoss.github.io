import React from "react";
import Footer from "../Footer";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Portrait from "../../images/portrait.jpg";
import "../../App.css";

const About = () => {
    return (
        <>
	<div class="page-bg"></div>
	<article className="hero is-fullheight">
		<div className="hero-body">
			<div className="container has-text-centered">
				<div className="columns is-8">
					<div className="column has-text-left">
						<div className="social-media">
							<a href="https://github.com/JacobHoss" target="_blank" rel="noreferrer" className="button is-light is-large"><FaGithub /></a>
							<a href="https://www.linkedin.com/in/jacob-hoss-00b431139" target="_blank" rel="noreferrer"
								className="button is-light is-large"><FaLinkedin /></a>
						</div>
					</div>
					<div className="column has-text-left box has-background-light mx-2">
						<article>
							<figure className="image is-128x128">
								<img src={Portrait} className="is-rounded" />
							</figure>
							<h1 class="title is-1">Jacob Hoss</h1>
							<p className="indent is-size-5 has-text-grey-dark horpadding paddingtop">
								Hi, my name is Hcob Hoss. I am a recent graduate of Georgia Tech's Fullstack Web Development 
								Bootcamp.  </p><br />
							<p className="indent is-size-5 has-text-grey-dark horpadding paddingbottom">A little background on me: I
								have lived in Metro Atlanta my whole life. I went to school at Kennesaw State
								University and majored in Entrepreneurial Studies. After I finished school, I
								started working for a State Farm agent. I have found tremendous success in that work
								and will surely take those skills with me to future careers. Web development is an
								exciting field of study and I'm anxious to finish the course and start my career.
							</p>
						</article>
					</div>
				</div>
			</div>
		</div>
    </article>
	<Footer />
        </>
    )
}

export default About;