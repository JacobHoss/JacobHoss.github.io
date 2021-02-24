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
							<h1 class="title is-3">Design-Minded with Technical Expertise</h1>
							<p className="indent is-size-5 has-text-grey-dark horpadding paddingtop">
								Hi, my name is Jacob Hoss. I am a Full Stack Web Developer, classical pianist, photographer, and motorcycle enthusiast.</p><br />
							<p className="indent is-size-5 has-text-grey-dark horpadding paddingbottom">After graduating from Kennesaw State University in 2018, I continued working for State Farm in insurance sales.
							I saw a great deal of professional development in myself and am excited to see my transferable skills being utilized in a career for web development. I work extremely well with people and always rise to the challenge when demands are high. 

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