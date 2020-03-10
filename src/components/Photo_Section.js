import React, { useState, useEffect } from "react";
import styled from "styled-components";

import  "../App.css";
import App from "../App";



const StyledDiv = styled.div`
    background: #adffd8;
    color: blue;
    width: 50%;
    margin-left: 25%;
    padding: 2%;
    img{
        width:50%;
    }
    h1{
        font-family: 'michroma', sans-serif;
    }
`

function Photo(props) {

    return(
        
            <StyledDiv>
                <h1>Astronomy Photo of the Day</h1>
                <h2>{props.title}</h2>
                <img src = {props.url} />
                <p>{props.date}</p>
                <p>{props.explanation}</p>
            </StyledDiv>
        
    )

}

export default Photo;