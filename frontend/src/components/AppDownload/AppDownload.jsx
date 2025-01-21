import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> <span>Tomato App</span>
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore-logo" />
        <img src={assets.app_store} alt="appstore-logo" />
      </div>
    </div>
  );
};

export default AppDownload;
