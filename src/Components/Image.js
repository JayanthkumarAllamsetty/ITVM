import "./Image.css";
import introImg from "../assets/Face Recognition.gif";
import React from 'react'
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="Image"> 
    <div className="Image__container">
        <img className="into-img" src={introImg}/>
        </div>
        <div className="content">
            <p>
                Welcome to ContrastIQ Technologies
            </p>
            <h1>
                We provide you the best face recognition system for your business and personal use.
            </h1>
            <div>
                {/* <Link to="/projects" className="btn">Projects</Link> */}
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Image