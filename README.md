# Curatorial

Curatorial is an artworks API. [The backend] (https://github.com/softscienceprojects/Curatorial_backend) was built with Ruby on Rails and seeded with artworks from the Harvard Art Museum's API at the `/artworks` endpoint. Each artwork was then submitted to the Google Vision API to be analysed for its content. The response from Google Vision has been stored at the `/contents` endpoint. 

## Key User Stories
Users can view search for and view artworks without creating an account. By signing up, users can save artworks to exhibitions that they create (by ticking it as 'public' it will appear on /exhibitions). Other users can 'like' the exhibition which will save onto their user dashboard (one or more likes gives it the 'popular' flag on the exhibitions index page). 

Users are also able to follow other users. By following another user, each time an exhibition is made it will appear on your user dashboard.

## Demo
[The demo can be viewed on Heroku](https://curatorial-app.herokuapp.com/). A video overview will follow shortly. 

Use demo login: e@e.com, password: e

Demo is a scaled-down version with only 50 artworks.

## Curatorial_frontend

The frontend was built with React and custom CSS, and features front-end validation and nested routes.
