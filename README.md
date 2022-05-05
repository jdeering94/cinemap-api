# Cinemap-api

GA SEI Project 3 API

# Project 3

Cinemap is meant to be a website that allows users to navigate through a database of world cinema organised by contintent. The site also allows users to submit their own picks for films, and create reviews and likes for the films. The database was made using MongoDB, and the frontend was made using Bulma and React.

**Duration** 7 days.

**Technologies Used** HTML, CSS, Bulma, React, MongoDB, Express.

**LINK**

https://cinemap.netlify.app/

# The Brief

Create a fullstack app using MongoDB and React, the app has to have basic CRUD functionality.

# Site Overview

<p>
<img src="./assets/cinemap-home.png" />
</p>

<p align="center">
<img src="./assets/cinemap-continent.png" width = "47%" />
<img src="./assets/cinemap-film.png" width="47%"/>
</p>

# Preliminary work

<p>
<img src="./assets/cinemap-excalidraw.png" />
</p>

# Day 1

The first day was mainly spent planning and coming up with the concept. We also decided to use trello to organise our workflow and excalidraw for whiteboarding.

# Day 2

We started working on the backend first, starting with the creation of the database. The first model we tackled was the film model, which consisted of two schemas, film and comment. We had to link the comment schema to the film schema in order to allow for reviews to be written for the films, which was an integral part of the app. Once we had the models working, we started to add basic CRUD operations for the films, starting with GET, DELETE, and POST.

# Day 3

Day 3 was still mainly spent on backend, we added more operations to the film controller, and also added a new model for the user. This process was strightforward but time consuming given the nature of authentication and security.

# Day 4

We started on the frontend, my main responsbility was to get the Home component working with the focus to be on the world map. This was achieved by using an npm plugin. I then started on the FilmIndex and ShowFilm pages.

# Day 5

The main win for this day was getting a like button working. I started by adding two buttons to the ShowFilm page, one that handled like and one that handled unlike. I broke it down so that we would know that the frontend was successfully talking to the backend. Once I was satisfied with the functionality, I added logic to the handleLikeButton, changed it from two buttons to one, and made it so that the button changed its function based on the liked state of the user.

# Day 6

We were able to start on some stretch goals, including a randomFilm page. This required some backend work to add a new operation that we hadn't built yet, and once that was working it was relatively simple to implement on the frontend. The only complicated aspect was making sure that the api call would be made everytime the random film page was navigated to. This was accomplished by using a redirect, so that once the randomFilm is pulled from the API, the page then navigates to the ShowFilm page using the randomFilm's ID.

# Day 7

This day was mainly spent on bug fixes and small polishes, like adding a nicer componenet for the star rating on the review section on the showFilm page, as well as adding the username to the navbar once they are logged in.

## Major Hurdles

A major hurdle that wasn't really resolved due to the time constraint is the edit function for reviews. It worked, but we struggled to implement it into the frontend in a way that seemed very intuitive. As it stands, the create button changes to an edit button once there is a review present written by the User, and the review needs to be re-written in the textbox rather than the review text changing to an input area which the user can edit and then submit changes from.
