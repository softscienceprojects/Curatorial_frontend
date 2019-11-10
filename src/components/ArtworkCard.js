import React from 'react'
import { Link } from 'react-router-dom'

const ArtworkCard = (props) => {


    return(
    
        <div className="artwork-card">
            <hr />
        {/* Image below:  */}
        <Link to={{pathname: `/explore/${props.artwork.id}`}} key={props.artwork.id}><img src={props.artwork.image_url} alt={props.artwork.title}  className="responsive" /></Link>
        
        <div className="art-tags">
        {/* <span className="tag" key={content.description}><button onClick={()=> searchforArt(content.description, this.props)}>{content.description}</button></span> */}
            {props.searchTerm ? 
            props.artwork.contents.map(content=> 
            content.description !== props.searchTerm
            ? <label className="tag">&nbsp;{content.description}&nbsp;</label>  
            : <label className="tag-selected">&nbsp;{content.description}&nbsp;</label>   
            ) :
            props.artwork.contents.map(content=>  
            <label className="tag">&nbsp;{content.description}&nbsp;</label>  
            )}  
        </div>

        <h4><Link to={{pathname: `/explore/${props.artwork.id}`}} key={props.artwork.id}>{props.artwork.title}</Link></h4>
        <p>By {props.artwork.artist}</p>
        <p>{props.artwork.medium}</p>
        </div>
    )
}

export default ArtworkCard