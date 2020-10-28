import React from "react";

const About = () => {
    return (
        <>
        <div className="page-bg"></div>
	<article className="hero is-fullheight">
		<div className="hero-body">
			<div className="container has-text-centered">
				<div className="columns is-8">
					<div className="column has-text-left">
						<div className="social-media">
							<a href="https://github.com/JacobHoss" target="_blank" className="button is-light is-large"><i
									className="fa fa-github" aria-hidden="true"></i></a>
							<a href="https://www.linkedin.com/in/jacob-hoss-00b431139" target="_blank"
								className="button is-light is-large"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
						</div>
					</div>
					<div className="column has-text-left box has-background-light mx-2">
						<article>
							<figure className="image is-128x128">
								<img src="assets/portrait.jpg" className="is-rounded" />
							</figure>
							<p className="indent is-size-5 has-text-grey-dark">
								I enjoy web development for the same reasons I enjoy some of my hobbies;
								classical piano and photography. It takes diligence and creativity to be a good
								developer. The GA Tech Coding Boot Camp has been a transformative experience for me.
								I have found myself enjoying it way more than I thought I would. </p><br />
							<p className="indent is-size-5 has-text-grey-dark">A little background on me: I
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
        </>
    )
}

export default About;