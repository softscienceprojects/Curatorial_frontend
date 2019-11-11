import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitionCard = (props) => {
    let whiteCube = props.exhibition.artworks.length === 0

    return(
       
        <div className="exhibition-card" style={{ backgroundImage: whiteCube ? null : `url(${props.exhibition.artworks[0].image_url})` }} >
        <h2 id="logo"><Link to={{pathname: `/exhibitions/${props.exhibition.id}`}}>{props.exhibition.title}</Link></h2>
        <h6>{props.exhibition.summary}</h6>
         </div>
    )
}

export default ExhibitionCard