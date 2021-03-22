import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";
import requestService from "../../RequestServices"
import YouTube from "react-youtube";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Options for react-youtube
  const opts = {
    height: "370",
    width: "40%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let random = Math.floor(Math.random() * request.data.results.length - 1);
      
      // <-- Gets only the movies with image path -->
      let resultsArr = requestService.GetOnlyMoviesWithImgPath(request);

      request.data.results = resultsArr;
      // <-- -->
      
      setMovie(request.data.results[random]);
    }

    fetchData();
  }, []);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/tv/${movie.id}/videos?api_key=4c88af88c8fc8e1fcf39be46e4317246`
      );
      
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }

  };
  
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
          <button className="banner-button" onClick={() => handleClick(movie)}>Play</button>
          <button className="banner-button">My List</button>
        </div>
        {/* Description */}
        <h1 className="banner-description">{movie?.overview}</h1>
      </div>
      
      {trailerUrl && <YouTube className="react-youtube-player" videoId={trailerUrl} opts={opts} />}
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
