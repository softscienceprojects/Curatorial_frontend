const API_ENDPOINT = 'http://localhost:3000'
const LOGIN_URL = `${API_ENDPOINT}/login`
const VALIDATE_URL = `${API_ENDPOINT}/validate`
const USERS_URL = `${API_ENDPOINT}/users`
const EXHIBITIONS_URL=`${API_ENDPOINT}/exhibitions`
const ARTWORKS_URL=`${API_ENDPOINT}/artworks`


const jsonHeaders = (more={}) => ({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...more
})

const authHeader = (more={}) => ({
    Authorization: localStorage.getItem('token'),
    ...more
})

const handleError = () => {
    console.error("you've reached the handle error message")
}

const handleServerResponse = res => {
    if (res.ok) {
        return res.text().then(text => {
            try {
                return JSON.parse(text)
            } catch(error) {
                return {staticPageContent: text}
            }
        })
    } else if (res.status === 503) {
        return { code:503 }
    } else if (res.status === 500) {
        return { code: 500, error: 'Something went wrong' }
    } else {
        return res.text().then(text => {
            try {
                return JSON.parse(text)
            } catch (error) {
                return res
            }
        })
    }
}

const getExhibitions = () => fetch(EXHIBITIONS_URL).then(handleServerResponse)
const getExhibition = id => fetch(`${EXHIBITIONS_URL}/${id}`).then(handleServerResponse)

const getUsers = () => fetch(USERS_URL).then(handleServerResponse)
const getUser = id => fetch(`${USERS_URL}/${id}`).then(handleServerResponse)

const getArtworks = () => fetch(ARTWORKS_URL).then(handleServerResponse)
const getArtwork = id => fetch(`${ARTWORKS_URL}/${id}`).then(handleServerResponse)

const login = userDetails => {
    fetch(LOGIN_URL, {
        method: 'POST',
        headers: jsonHeaders(),
        body: JSON.stringify({user: userDetails})
    })
    .then(handleServerResponse)
    .then(userDetails => {
        if (userDetails.token) {
            localStorage.setItem('token', userDetails.token)
        }
        return userDetails.user
    })
    .catch(handleError) 
}

const validateUser = () => {
    fetch(VALIDATE_URL, {
        method: 'POST',
        headers: authHeader()
    })
    .then(handleServerResponse)
    .then(userDetails => {
        if (!userDetails) {
            return {errors: ['something went wrong with validating the user']}
        }
        if (userDetails.token) {
            localStorage.setItem('token', userDetails.token)
        } 
        return userDetails.user || userDetails
    })
    .catch(handleError)
}

const logout = () => {
    localStorage.removeItem('token')
}

// WRITE POST EXHIBITION
// OTHER ACTIONS TO TAKE?  
  //LIKE EXHIBITION, 
  //UPDATE EHIBITION, 
  //DELETE EXHIBITION
  //FOLLOW OTHER USER, 
  //UNFOLLOW OTHER USER
  //UPDATE USER 
  //DELETE USER
  //MAKE SEARCH REQUEST (GET SEARCH RESULTS), 


export default {
    login,
    validateUser,
    logout,
    getUser,
    getUsers,
    getExhibition,
    getExhibitions,
    getArtwork,
    getArtworks
}