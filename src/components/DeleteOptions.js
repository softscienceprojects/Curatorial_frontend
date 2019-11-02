import React from 'react'
import API from '../adapters/API'



const deleteToConfirm = (routerProps, propId) => {
    return(<>
        <p>"Are you sure?"</p>
        <button>Yes, Delete</button>
        <button>No!</button>
    </>)
}

export {
    deleteToConfirm,
}