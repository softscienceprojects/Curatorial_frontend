import React from 'react'
import { Link } from 'react-router-dom'

const ArtworkCard = (props) => {


    return(
    
        <div>
        <img src={props.artwork.image_url} alt={props.artwork.title}  className="responsive" />
        <Link to={{pathname: `/explore/${props.artwork.id}`}} key={props.artwork.id}>{props.artwork.title}</Link>
        {/* {props.artwork.description.map(description=> <p>description</p>)} */}
        <p>By {props.artwork.artist}</p>
        <p>{props.artwork.medium}</p>
        </div>
    )
}

export default ArtworkCard