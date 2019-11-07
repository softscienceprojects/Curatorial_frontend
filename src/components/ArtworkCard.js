import React from 'react'
import { Link } from 'react-router-dom'

const ArtworkCard = (props) => {


    return(
    
        <div className="artwork-card">
        {/* <img src={props.artwork.image_url} alt={props.artwork.title}  className="responsive" /> */}
        <Link to={{pathname: `/explore/${props.artwork.id}`}} key={props.artwork.id}>{props.artwork.title}</Link>
        
        {/* <span className="tag" key={content.description}><button onClick={()=> searchforArt(content.description, this.props)}>{content.description}</button></span> */}
            {/* {props.artwork.contents.map(content=> 
            content.description !== props.match.params.id 
            ? <span className="tag">&nbsp;{content.description}&nbsp;</span>
            : <span className="tag-selected">&nbsp;{content.description}&nbsp;</span> )} */}

        <p>By {props.artwork.artist}</p>
        <p>{props.artwork.medium}</p>
        </div>
    )
}

export default ArtworkCard