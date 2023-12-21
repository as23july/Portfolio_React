import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Resume from "../../assets/docs/Resume-Aditya.pdf";

const Home = () => {
  return (
    <>
      <div class="container-fluid home-container">
        <div class="container home-content">
          <h2>Hi👋 I'm Aditya Singh</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer !",
                  "MERN Stack Developer !",
                  "Java Developer!"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire"> Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="Resume-Aditya.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
