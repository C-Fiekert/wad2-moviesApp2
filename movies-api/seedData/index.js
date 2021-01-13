import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import actorModel from '../api/actors/actorModel';
import topratedModel from '../api/toprated/topratedModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import genresModel from '../api/genres/genresModel';
import {movies} from './movies.js';
import {actors} from './actors.js';
import {toprated} from './top-rated.js';
import {upcoming} from './upcoming.js';
import {genres} from './genres.js';

const users = [
  {
    //'username': 'user1',
    //'password': 'test1'
    //'favourites': []
  }
  // {
  //   'username': 'user2',
  //   'password': 'test2',
  //   'favourites': []
  // },
  // {
  //   'username': 'user3',
  //   'password': 'test3',
  //   'favourites': []
  // },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all actors documents in collection and inserts test data
export async function loadActors() {
  console.log('load seed data');
  console.log(actors.length);
  try {
    await actorModel.deleteMany();
    await actorModel.collection.insertMany(actors);
    console.info(`${actors.length} Actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load actor Data: ${err}`);
  }
}

export async function loadTopRated() {
  console.log('load seed data');
  console.log(toprated.length);
  try {
    await topratedModel.deleteMany();
    await topratedModel.collection.insertMany(toprated);
    console.info(`${toprated.length} TopRated were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load TopRated Data: ${err}`);
  }
}

export async function loadUpcoming() {
  console.log('load seed data');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Upcoming Data: ${err}`);
  }
}

export async function loadGenres() {
  console.log('load seed data');
  console.log(genres.length);
  try {
    await genresModel.deleteMany();
    await genresModel.collection.insertMany(genres);
    console.info(`${genres.length} Genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Genre Data: ${err}`);
  }
}