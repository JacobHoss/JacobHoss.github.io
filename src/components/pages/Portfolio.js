import React from "react";

const Portfolio = () => {
    return (
        <>
         <div className="portfolio-bg"></div>
  <main className="pt-6">
    <div className="columns pl-2">

      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://github.com/jeashwor/The_Silent_Turtles" target="_blank"><img
                src="./assets/appScreenshot.jpg" alt="showmethebrews" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Show Me the Brews</p>
              <a href="https://github.com/JacobHoss/random-password-generator" target="_blank">Github Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            This project is a Node server based Heroku app using Sequelize. My co-developers and I were
            using the Google Maps API, Zip Code API, and Brewery API to get data based on the User's requests.
          </div>
        </div>
      </section>

      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://nataliegarcia-8.github.io/Domestic-Covid19-TravelApp/index.html" target="_blank"><img
                src="./assets/maskedwanderer.jpg" alt="covid-19app" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">COVID-19 Travel App</p>
              <a href="https://github.com/nataliegarcia-8/Domestic-Covid19-TravelApp" target="_blank">Github
                Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            A domestic travel app that helps travelers make informed decisions on where to travel by providing them with
            COVID-19 data, and the cheapest flight to their desired destination.
          </div>
        </div>
      </section>


      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://jacobhoss.github.io/car-trivia-quiz/" target="_blank"><img
                src="./assets/car-trivia-quiz.jpg" alt="car-trivia-quiz" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Car Trivia Quiz</p>
              <a href="https://github.com/JacobHoss/car-trivia-quiz" target="_blank">Github Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            A timed trivia-quiz based around mostly classNameic car knowledge. It was built with Javascript and Bootstrap.
            It also has lots of fun sound effects.
          </div>
        </div>
      </section>

      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://jacobhoss.github.io/weather-dashboard/" target="_blank" className="deployed"><img
                src="./assets/weatherdashboard.jpg" alt="weather-dashboard" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Weather Dashboard</p>
              <a href="https://github.com/JacobHoss/weather-dashboard" target="_blank">Github Repository</a>
            </div>
          </div>

          <div className="content is-size-5">
            A weather forecast app that uses two API's to gather data on the inputted city. After the user inputs a
            city, it is stored in local storage, in a search history list.
          </div>
        </div>
      </section>


      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://jacobhoss.github.io/random-password-generator/index.html" target="_blank"><img
                src="./assets/random-password-generator.jpg" alt="random-password-generator" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Password Generator</p>
              <a href="https://github.com/JacobHoss/random-password-generator" target="_blank">Github Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            A program that takes a user's inputs and outputs a random password. It uses a series of Javascript prompts
            to determine the strength and length of the password.
          </div>
        </div>
      </section>


      <div className="social-media column">
        <a href="https://github.com/JacobHoss" target="_blank" className="button is-light is-large"><i className="fa fa-github"
            aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/jacob-hoss-00b431139" target="_blank" className="button is-light is-large"><i
            className="fa fa-linkedin" aria-hidden="true"></i></a>
      </div>

    </div>
  </main>
        </>
    )
}

export default Portfolio;