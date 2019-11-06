import React from "react";

const RemoveArtworkButton = props => {
  let artwork_exhibition_id = props.artwork.artwork_exhibitions.find(
    art => art.exhibition_id === props.exhibition.id
  );
  if (props.user && props.user.id === props.exhibition.user.id) {
    return (
      <button
        className="danger"
        onClick={() =>
          props.removeArtworkFromExhibition(artwork_exhibition_id.id)
        }
      >
        Remove Artwork
      </button>
    );
  } else {
    return null;
  }
  // props.user.id === props.exhibition.user.id
};

export default RemoveArtworkButton;
