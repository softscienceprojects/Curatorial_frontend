const API_ENDPOINT = "http://localhost:3000";

const SIGNIN_URL = `${API_ENDPOINT}/signin`;
//const SIGNUP_URL = `${API_ENDPOINT}/users`
const VALIDATE_URL = `${API_ENDPOINT}/validate`;
const USERS_URL = `${API_ENDPOINT}/users`;

const EXHIBITIONS_URL = `${API_ENDPOINT}/exhibitions`;
const ARTWORKS_URL = `${API_ENDPOINT}/artworks`;
//const CONTENTS_URL=`${API_ENDPOINT}/contents`
const SEARCH_URL = `${API_ENDPOINT}/search?description=`;


// HELPER METHODS /////////////////////
const jsonHeaders = (more = {}) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  ...more
});

const authHeader = (more = {}) => ({
  Authorization: localStorage.getItem("token"),
  ...more
});

const fetchConfig = (method = "GET", body) => {
  return {
    method,
    headers: jsonHeaders(),
    body: JSON.stringify(body)
  };
};

const handleError = () => {
  debugger;
  console.error("you've reached the handle error message");
};

const handleServerResponse = res => {
  if (res.ok) {
    return res.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return { staticPageContent: text };
      }
    });
  } else if (res.status === 503) {
    return { code: 503 };
  } else if (res.status === 406) {
    return { code: 406, error: "Not acceptable" };
  } else if (res.status === 500) {
    return { code: 500, error: "Something went wrong" };
  } else {
    return res.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return res;
      }
    });
  }
};

// USER GOODNESS ////////////////////////////
const getUsers = () => fetch(USERS_URL).then(handleServerResponse);
const getUser = id => fetch(`${USERS_URL}/${id}`).then(handleServerResponse);

//FOLLOW OTHER USER,
//UNFOLLOW OTHER USER

const updateUser = (userDetails, id) => {
  return fetch(`${USERS_URL}/${id}`, {
    method: "PATCH",
    headers: jsonHeaders(),
    body: JSON.stringify(userDetails)
  }).then(handleServerResponse);
};

const deleteUser = id => {
  return fetch(`${USERS_URL}/${id}`, fetchConfig("DELETE"))
    .then(handleServerResponse)
    .then(userDetails => userDetails.user)
    .catch(handleError);
};

// & VALIDATION /////////////////////////////
const signin = userDetails => {
  return fetch(SIGNIN_URL, fetchConfig("POST", { user: userDetails }))
    .then(handleServerResponse)
    .then(userDetails => {
      if (userDetails.token) {
        localStorage.setItem("token", userDetails.token);
      }
      return userDetails.user;
    })
    .catch(handleError);
};

const signup = userDetails => {
  return fetch(USERS_URL, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify({ user: userDetails })
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (userDetails.token) {
        localStorage.setItem("token", userDetails.token);
      }
      return userDetails.user;
    })
    .catch(handleError);
};

const validateUser = () => {
  return fetch(VALIDATE_URL, {
    method: "POST",
    headers: authHeader()
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (!userDetails) {
        return { errors: ["something went wrong with validating the user"] };
      }
      if (userDetails.token) {
        localStorage.setItem("token", userDetails.token);
      }
      return userDetails.user || userDetails;
    })
    .catch(handleError);
};

const logout = () => {
  localStorage.removeItem("token");
};

// ARTWORKS ////////////////////
const getArtworks = () => fetch(ARTWORKS_URL).then(handleServerResponse);
const getArtwork = id =>
  fetch(`${ARTWORKS_URL}/${id}`).then(handleServerResponse)
//MAKE SEARCH REQUEST (GET SEARCH RESULTS)

const search = searchTerm => {
  return fetch(`${SEARCH_URL}${searchTerm}`).then(res => res.json());
};

const addArtToExhibition = (artwork_id, exhibition_id) => {
   return fetch(`${API_ENDPOINT}/artwork_exhibitions`, {
    method: "POST",
    headers: jsonHeaders(),
    body:JSON.stringify({artwork_exhibition: {artwork_id: artwork_id, exhibition_id: exhibition_id}})
  }).then(handleServerResponse)
}

const removeArtFromExhibition = (join_id) => {
  return fetch(`${API_ENDPOINT}/artwork_exhibitions/${join_id}`,{
  method: "DELETE"}).then(handleServerResponse)
}

// EXHIBITIONS ////////////////
const getExhibitions = () => fetch(EXHIBITIONS_URL).then(handleServerResponse);
const getExhibition = id =>
  fetch(`${EXHIBITIONS_URL}/${id}`).then(handleServerResponse);

const newExhibition = exhibitionDetails => {
  return fetch(EXHIBITIONS_URL, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify({ exhibition: exhibitionDetails })
  }).then(handleServerResponse);
};

const editExhibition = (exhibitionDetails, id) => {
  return fetch(`${EXHIBITIONS_URL}/${id}`, {
    method: "PATCH",
    headers: jsonHeaders(),
    body: JSON.stringify({ exhibition: exhibitionDetails })
  }).then(handleServerResponse);
};


const deleteExhibition = (id) => {
  return fetch(`${EXHIBITIONS_URL}/${id}`, {
    method: "DELETE",
  }).then(handleServerResponse);
};


const likeExhibition = (like_data) => {
  return fetch(`${API_ENDPOINT}/exhibition_likes`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify({exhibition_like: like_data})
  }).then(handleServerResponse);
}

const unlikeExhibition = id => {
  return fetch(`${API_ENDPOINT}/exhibition_likes/${id}`, {
    method: "DELETE",
  }).then(handleServerResponse);
}

// WRITE POST EXHIBITION
// OTHER ACTIONS TO TAKE?
//LIKE EXHIBITION,

// EXPORT ////////////////////
export default {
  signin,
  signup,
  validateUser,
  logout,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getExhibition,
  getExhibitions,
  newExhibition,
  editExhibition,
  deleteExhibition,
  likeExhibition,
  unlikeExhibition,
  addArtToExhibition,
  removeArtFromExhibition,
  search,
  getArtwork,
  getArtworks
};
