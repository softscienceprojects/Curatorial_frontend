import React from "react";

const RemoveArtworkButton = props => {

// SEARCH THROUGH EXHIBITION.ARTWORKS TO FIND this props.artwork

  let artwork_exhibition_id = props.exhibition.artwork_exhibitions.find(
    art => art.artwork_id === props.artwork.id
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
