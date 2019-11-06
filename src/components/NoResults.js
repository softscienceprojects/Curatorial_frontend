import React from "react";

const NoResults = props => {
    return(
        <div>
        <h1 id="logo">You're an original</h1>
        <h4>Nothing matches {props.searchTerm}</h4>
        </div>
    )
}

export default NoResults