import React from "react";
import "./Modal.css";
import YouTube from "react-youtube";

function Modal(props) {
  return props.state.show && props.trailerUrl ? (
    <div className="modal">
      {props.trailerUrl && (
        <div>
          <button className="my-list-button">ADD TO MY LIST</button>

          <button
            className="close-button"
            onClick={() => {
              props.setState({ show: false });
              props.setTrailerUrl("");
            }}
          >
            close
          </button>
          <YouTube
            className="youtube-player"
            videoId={props.trailerUrl}
            opts={props.opts}
          />
        </div>
      )}
    </div>
  ) : null;
}

export default Modal;
