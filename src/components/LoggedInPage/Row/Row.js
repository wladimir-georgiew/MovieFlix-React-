import React, { useState, useEffect } from "react";

import axios from "../../../axios";
import requestService from "../../../RequestServices";
import Modal from "./Modal.js";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //MODAL STATE
  const [state, setState] = useState({ show: false });

  // Options for react-youtube
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Code which runs on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);

      // <-- Gets only the movies with image path -->
      let resultsArr = requestService.GetOnlyMoviesWithImgPath(request);

      request.data.results = resultsArr;
      // <-- -->

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  //pops the trailer for the movie clicked
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setState({ show: false });
    } else {
      let trailerurl = await axios.get(
        `/tv/${movie.id}/videos?api_key=4c88af88c8fc8e1fcf39be46e4317246`
      );

      setTrailerUrl(trailerurl.data.results[0]?.key);
      setState({ show: true });
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      <Modal
        state={state}
        setState={setState}
        trailerUrl={trailerUrl}
        opts={opts}
        setTrailerUrl={setTrailerUrl}
      />
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
