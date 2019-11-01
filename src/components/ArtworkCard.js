import React from 'react'
import { Link } from 'react-router-dom'

const ArtworkCard = (props) => {


    return(
    
        <div>
        <Link to={`explore/${props.artwork.id}`} key={props.artwork.id}>{props.artwork.title}</Link>
        {/* {props.artwork.description.map(description=> <p>description</p>)} */}
        
        
        </div>
    )
}

export default ArtworkCard