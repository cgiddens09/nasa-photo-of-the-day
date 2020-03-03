import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo_Section.js";



function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=PsxsZpRQ0Zm5AM7FWhmZE399ZYV167gDs7dRyXuR&date=2020-03-01').then(response => {
          console.log(response);
          setImage(response.data);
      });
  }, []);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Photo title = {image.title} url = {image.url} date = {image.date} explanation = {image.explanation} />
    </div>
  );
}

export default App;
