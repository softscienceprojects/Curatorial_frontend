import React from 'react'

const closeWindow = (props) => {
    props.history.goBack()
}

const CloseWindowButton = (props) => {
    return(
        <button id="closeWindowButton" onClick={() => closeWindow(props)}>X</button>
    )
}

export default CloseWindowButton