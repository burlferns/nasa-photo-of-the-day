import React, {useState, useEffect} from "react";
import "./App.css";   
import axios from "axios";
import ApodList from "./Components/apodList";

function App() {
  const [picToday,setPicToday] = useState({});
  const [picDay,setPicDay] = useState({});

  useEffect( () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        // console.log("This is response:", response);
        setPicToday(response.data);
      })
      .catch(error => {
        console.log("The data was not returned for today",error);
      });
  },[]);

  useEffect( () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-10-09")
      .then(response => {
        // console.log("This is response:", response);
        setPicDay(response.data);
      })
      .catch(error => {
        console.log("The data was not returned for some day",error);
      });
  },[]);

  
  if(picToday.title && picDay.title) {
    // let imgUrlT = picToday.hdurl;
    // let titleT = picToday.title;
    // let explainT = picToday.explanation;

    // let imgUrlD = picDay.hdurl;
    // let titleD = picDay.title;
    // let explainD = picDay.explanation;
    // let day = "2019-10-09";

    return (
      <div className="App">
        {/* <ApodList imgUrlT={imgUrlT} titleT={titleT} explainT={explainT} imgUrlD={imgUrlD} titleD={titleD} explainD={explainD} day={day} /> */}

        <ApodList />

      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }

  // return <h3>Loading...</h3>;
  

}

export default App;
