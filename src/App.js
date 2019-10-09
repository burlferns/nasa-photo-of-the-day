import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Apod from "./Components/apod";

function App() {
  const [nasaData,setNasaData] = useState({});

  useEffect( () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        // console.log("This is response:", response);
        setNasaData(response.data);
        // console.log("This is nasaData in axios command:", nasaData);
      })
      .catch(error => {
        console.log("The data was not returned",error);
      });
  },[]);

  // console.log("This is nasaData outside the axios command:", nasaData);

  if(nasaData!=={}) {
    let imgUrl = nasaData.hdurl;
    let title = nasaData.title;
    let explanation = nasaData.explanation;

    return (
      <div className="App">
        <Apod imgUrl={imgUrl} title={title} explanation={explanation} />
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }

  // return <h3>Loading...</h3>;
  

}

export default App;
