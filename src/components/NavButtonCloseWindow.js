import React from 'react'

const closeWindow = (props) => {
    props.history.goBack()
}

const CloseWindowButton = (props) => {
    return(
        <button className="removeArtwork" onClick={() => closeWindow(props)}>Close window</button>
    )
}

export default CloseWindowButton