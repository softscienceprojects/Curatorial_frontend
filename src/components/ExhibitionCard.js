import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitionCard = (props) => {

    return(
       
        <div className="exhibition-card" >
        <h2 id="logo"><Link to={{pathname: `/exhibitions/${props.exhibition.id}`}}>{props.exhibition.title}</Link></h2>
        <h6>{props.exhibition.summary}</h6>
         </div>
    )
}

export default ExhibitionCard