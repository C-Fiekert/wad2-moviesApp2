# Assignment 2 - Web API.

Name: Callum Fiekert

## Features.

 + Feature 1 - Users can log in and add movies to their favourites and choose movies to watch later. These movies can also be removed
 + Feature 2 - Users can view the most popular actors
 + Feature 3 - Users can view top rated movies and upcoming movies
 + Feature 4 - Movies page can be filtered by search or by genre
 + Feature 5 - Movie details pages display movie information, reviews, and the movie cast

## Installation Requirements

This app along with its API can be downloaded from:

```bat
https://github.com/C-Fiekert/wad2-moviesApp2
```

Next you must unzip the project and open the unzipped folder in your preferred code editor.
You must ensure that MongoDB is installed before continuing. It can be downloaded at https://www.mongodb.com/try/download/community

In a new terminal in your code editor, navigate to the 'movies-api' directory and run 'npm install'.

```bat
cd .\movies-api\
npm install
```

Once this has completed, go back a directory and navigate to the 'reactApp' directory and run 'npm install'.

```bat
cd ..
cd .\reactApp\
npm install
```

Once these steps have been completed, you can move on to the API configuration

## API Configuration
Before you start the API and the React app, you must create a file called '.env' in the 'movies-api' directory and add the following:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
SECRET=ilikecake
TMDB_KEY=[YOUR-TMDB-API-KEY]
mongoDB=mongodb://localhost:27017/movies_db
SEED_DB=true
```

## API Design
API Overview:

|  | GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets the homepage movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a specific movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for movie | N/A | N/A 
| /api/movies/{movieid}/credits | Get the cast for a movie | N/A | N/A | N/A 

| /api/actors | Get the most popular actors | N/A | N/A | N/A  
| /api/actors/{actorid} | Get a specific actor | N/A | N/A | N/A  
| /api/actors/{actorid}/credits | Get an actor's featured movies | N/A | N/A | N/A 

| /api/toprated | Get all top rated movies | N/A | N/A | N/A  
| /api/upcoming | Get all upcoming movies | N/A | N/A | N/A  

| /api/users | N/A | Can log into an account with the correct username and password | N/A | N/A  
| /api/users?action=register | N/A | Can create a new user with a username and password | N/A | N/A  
| /api/users/{username}/favourites | Can get the users favourite movies | Can add a new movie to the users favourites | N/A | Can remove a movie from the users favourites  
| /api/users/{username}/watchLater | Can get the users watch later movies | Can add a new movie to the users watch later | N/A | Can remove a movie from the users watch later  

The design for this API can also view using the following two links. These documents were created using Swagger and OpenAPI:
API GET and DELETE calls
https://app.swaggerhub.com/apis-docs/C-Fiekert/GET-AND-DELETE/1.0
API POST calls
https://app.swaggerhub.com/apis-docs/C-Fiekert/POST/1.0

## Security and Authentication
User authentication is used alongside Mongoose. User credentials are stored using MongoDB with all passwords being stored as hashes and not plaintext for extra security.
Users cannot access the favourites page, watch later page, or the review form page without authentication with a user account. Helmet JS is also being used to protect the HTTP headers for the express app.

## Integrating with React App

The React app in this project has been fully integrated with the API. Every call and request sent to the React app in directed to and handled by the API which we can see from the following link:
https://github.com/C-Fiekert/wad2-moviesApp2/blob/main/reactApp/src/api/movie-api.js

Below, we can see an example of these calls in the React app which fully relies on the API.

~~~Javascript
export const getMovie = id => {
    return fetch(
       '/api/movies/'+id,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getCredits = id => {
    return fetch(
       '/api/movies/'+id+'/credits',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovieCredits = id => {
    return fetch(
       '/api/actors/'+id+'/credits',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovieReviews = id => {
    return fetch(
       '/api/movies/'+id+'/reviews',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
~~~

## Extra features

A top rated page is available for users to view. This displays the top rated movies in the seed data
An upcoming page is also available which displays new movies coming out soon using the seed data
Users can add movies to their favourites or to their watch later list. This movies can also be removed from their lists

## Independent learning.

During the creation of the React app and API, I learned and implemented how to remove movies from a user's favourites list or watch later list. I learned this through the Mongoose documentation where I used the 'pull' function to remove a specified movie ID from the array.
I also implemented Helmet JS for added security for Express. This adds security to the HTTP headers which discloses less information when viewed. This is a line of defense against web attacks on our app.