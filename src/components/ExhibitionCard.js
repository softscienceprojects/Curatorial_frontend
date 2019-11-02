import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitionCard = (props) => {


    return(
    
        <div>
        <Link to={{pathname: `/exhibitions/${props.exhibition.id}`}}>{props.exhibition.title}</Link>
        </div>
    )
}

export default ExhibitionCard