import React from 'react';
import profilePic from "../Images/my.jpg";
import "./Menus.css";
import { FcHome } from "react-icons/fc";

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
      <div class="navbar-profile-pic ">
        <img className="" src={profilePic} alt="Profile Pic" />
      </div>
      <div class="nav-items">
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Home</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>About</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Work Experience</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Projects</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Tech Stack</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Education</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Skills</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome/>Contact</div>
        </div>
      </div>
      </>
      ) : (
      <>
      <div class="nav-items">
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Home'/>Home</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='About'/>About</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Work Experience'/>Work Experience</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Projects'/>Projects</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Tech Stack'/>Tech Stack</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Education'/>Education</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Skills'/>Skills</div>
        </div>
        <div class="nav-item">
          <div class="nav-link"><FcHome title='Contact'/>Contact</div>
        </div>
      </div>
      </>)
      }
      </>
  )
}
export default Menus