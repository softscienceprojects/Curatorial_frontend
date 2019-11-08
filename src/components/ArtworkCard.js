import React from 'react'
import { Link } from 'react-router-dom'

const ArtworkCard = (props) => {


    return(
    
        <div className="artwork-card">
        {/* Image below:  */}
        {/* <Link to={{pathname: `/explore/${props.artwork.id}`}} key={props.artwork.id}><img src={props.artwork.image_url} alt={props.artwork.title}  className="responsive" /></Link> */}
        
        {/* <span className="tag" key={content.description}><button onClick={()=> searchforArt(content.description, this.props)}>{content.description}</button></span> */}
            {props.searchTerm ? 
            props.artwork.contents.map(content=> 
            content.description !== props.searchTerm
            ? <span className="tag">&nbsp;{content.description}&nbsp;</span>
            : <span className="tag-selected">&nbsp;{content.description}&nbsp;</span> 
            ) :
            props.artwork.contents.map(content=>  
            <span className="tag">&nbsp;{content.description}&nbsp;</span>
            )}  
        <h4><Link to={{pathname: `/explore/${props.artwork.id}`}} key={props.artwork.id}>{props.artwork.title}</Link></h4>
        <p>By {props.artwork.artist}</p>
        <p>{props.artwork.medium}</p>
        </div>
    )
}

export default ArtworkCard