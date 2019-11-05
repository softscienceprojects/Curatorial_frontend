import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitionCard = (props) => {


    return(
    
        <div>
        <h5><Link to={{pathname: `/exhibitions/${props.exhibition.id}`}}>{props.exhibition.title}</Link></h5>
        <h6>{props.exhibition.summary}</h6>
        </div>
    )
}

export default ExhibitionCard