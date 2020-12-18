import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinner-box">
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  );
};

export default Loading;
