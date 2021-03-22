import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let random = Math.floor(Math.random() * request.data.results.length - 1);

      setMovie(request.data.results[random]);
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgdropPosition: "center center",
      }}
    >
      <div className="banner-contents">
        {/* Title */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* Buttons */}
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        {/* Description */}
        <h1 className="banner-description">{movie?.overview}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
