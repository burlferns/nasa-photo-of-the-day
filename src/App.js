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
        console.log("This is response:", response);
        setNasaData(response);
        console.log("This is nasaData in axios command:", nasaData);
      })
      .catch(error => {
        console.log("The data was not returned",error);
      });
  },[]);

  let dataL=nasaData.data;
  console.log("The dataL is ",dataL);
  // let imgUrl=dataL.hdurl;
  // console.log("The imgUrl is ",imgUrl);


  return <h3>Loading from if ...</h3>;

  

}

export default App;
