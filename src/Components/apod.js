import React from "react";

export default function Apod({imgUrl,title,explanation})  {
    return (
        <div className="apod-card">
            <h1>Nasa's Astronomy Picture of the day</h1>
            <img alt="Nasa's astronomy picture" src={imgUrl} />
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
        
    );
  
}
  