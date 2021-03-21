import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Row(props) {
const [movies, setmovies] = useState([]);

    // Code which runs on a specific condition
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
        // if [] run once and don't run again
    }, []);

    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Row