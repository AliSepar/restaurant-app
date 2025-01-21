import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            labore esse sequi, facere velit tenetur sed numquam repudiandae
            temporibus quisquam? Expedita quibusdam ipsam porro est amet nemo
            inventore magnam facere.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="Linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN Touch</h2>
          <ul>
            <li>+32-400-11-22-33</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 c Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};
