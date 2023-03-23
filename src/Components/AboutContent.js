import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who are we?</h1>
           <p></p>
            <Link to="/contact">
            <button className="btn">Contact Us</button>
            </Link>
        </div>
        <div className="right">
            <div className="Img-container">
            <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Image</th>
        </tr>
        <tr>
          <td>Jayanth</td>
          <td>19</td>
          <td>Male</td>
          <td><img src={img4} width="80cm"></img></td>
        </tr>
        <tr>
          <td>Poojitha</td>
          <td>19</td>
          <td>Female</td>
          <td><img src={img3} width="80cm"></img></td>
        </tr>
        <tr>
          <td>Manvitha</td>
          <td>19</td>
          <td>Female</td>
          <td><img src={img2} width="80cm"></img></td>
        </tr>
        <tr>
          <td>Mahitha</td>
          <td>19</td>
          <td>Female</td>
          <td><img src={img1} width="80cm"></img></td>
        </tr>
        
      </table>
            </div>
            </div>
    </div>
  )
}

export default AboutContent