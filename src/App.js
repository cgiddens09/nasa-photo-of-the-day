import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo_Section.js";



function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState('2020-03-01');

  const fetchPic = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=PsxsZpRQ0Zm5AM7FWhmZE399ZYV167gDs7dRyXuR&date=${date}`).then(response => {
      console.log(response);
      setImage(response.data);
  });
  }

  useEffect(() => {
      fetchPic(date);
  }, []);

//   useEffect(() => {
//     axios.get(`https://api.nasa.gov/planetary/apod?api_key=PsxsZpRQ0Zm5AM7FWhmZE399ZYV167gDs7dRyXuR&date=${date}`).then(response => {
//         console.log(response);
//         setImage(response.data);
//     });
// }, [date]);

  return (
    <div className="App">
      <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
      <button onClick={() => fetchPic(date)}>Go!</button>
      <Photo title={image.title} url={image.url} date={image.date} explanation={image.explanation} />
    </div>
  );
}

export default App;
