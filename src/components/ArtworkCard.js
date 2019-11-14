import React from "react";
import { Link } from "react-router-dom";
import searchforArt from "../config/searchForArt";

const ArtworkCard = props => {
  return (
    <div className="artwork-card">
      <hr />
      {/* Image below:  */}
      <Link
        to={{ pathname: `/explore/${props.artwork.id}` }}
        key={props.artwork.id}
      >
        <img
          src={props.artwork.image_url}
          alt={props.artwork.title}
          className="responsive"
        />
      </Link>

       <div className="art-tags">
{props.searchTerm
          ? props.artwork.content_names.map(content =>
              content !== props.searchTerm ? (
                <button onClick={() => searchforArt(content, props)} className="tag">&nbsp;{content}&nbsp;</button>
              ) : (
                <button onClick={() => searchforArt(content, props)} className="tag-selected">&nbsp;{content}&nbsp;</button>
              )
            )
          : props.artwork.content_names.map(content => (
              <button onClick={() => searchforArt(content, props)} className="tag">&nbsp;{content}&nbsp;</button>
            ))}
      </div>

      <h4>
        <Link
          to={{ pathname: `/explore/${props.artwork.id}` }}
          key={props.artwork.id}
        >
          {props.artwork.title}
        </Link>
      </h4>
      <p>By {props.artwork.artist}</p>
      <p>{props.artwork.medium}</p>
    </div>
  );
};

export default ArtworkCard;
