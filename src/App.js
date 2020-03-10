import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo_Section.js";
import styled from "styled-components";



const Button = styled.button`
  width: 10%;
  background-color: white;
  color: purple:
  border: 5px solid lavender;
  margin-bottom: 3%;
`;

const Background = styled.div`
background-image:url('https://cdn2.vectorstock.com/i/1000x1000/68/11/seamless-pattern-with-cat-in-space-the-moon-and-vector-10166811.jpg');
background-position:cover;
`;



function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState('2020-03-05');

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
        <Background>
          <Button onClick={() => fetchPic(date)}>Go!</Button>
          <Photo title={image.title} url={image.url} date={image.date} explanation={image.explanation} />
        </Background>
    </div>
  );
}

export default App;
