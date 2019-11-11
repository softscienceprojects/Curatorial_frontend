import React from "react";
import { Link } from "react-router-dom";

const ExhibitionPoster = props => {
  let whiteCube = props.exhibition.artworks.length === 0;

  return (
    <div
      className="exhibition-poster"
      style={{
        backgroundImage: whiteCube
          ? null
          : `url(${props.exhibition.artworks[0].image_url})`
      }}
    >
      <h2 id="logo">
        <Link to={{ pathname: `/exhibitions/${props.exhibition.id}` }}>
          {props.exhibition.title}
        </Link>
      </h2>
      <h4>{props.exhibition.summary}</h4>
    </div>
  );
};

export default ExhibitionPoster;
