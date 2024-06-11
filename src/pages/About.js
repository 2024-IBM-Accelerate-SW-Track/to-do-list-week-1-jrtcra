import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/jarrett.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src = {profilePic}
              alt="Profile Pic"
            >
            </img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jarrett Cura</div>
            <div className="brief_description">
              Hello! I am a CS major at University of Illinois Urbana Champaign. I enjoy skateboarding, journaling, and exercise.
              I am interested in software engineering, particularly in the web development space.
            </div>
            <br></br>
            <div className="brief_description">
            <a href="https://www.linkedin.com/in/jarrettcura/"> Feel free to reach out!</a> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}