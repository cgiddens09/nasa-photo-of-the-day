import React, { useState, useEffect } from "react";
import axios from "axios";

function Photo(props) {
    

    return(
        <div>
            <h2>{props.title}</h2>
            <img src = {props.url} />
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div>
    )

}

export default Photo;