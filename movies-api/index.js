import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies, loadActors, loadTopRated, loadUpcoming, loadGenres} from './seedData';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import actorsRouter from './api/actors';
import topratedRouter from './api/toprated';
import upcomingRouter from './api/upcoming';
import session from 'express-session';
import helmet from 'helmet';
import passport from './authenticate';


dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadActors();
  loadTopRated();
  loadUpcoming();
  loadGenres();
}

const app = express();

const port = process.env.PORT;

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(helmet())

//configure body-parser
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//app.use(passport.initialize());​
app.use('/api/movies', /*passport.authenticate('jwt', {session: false}), */moviesRouter);
//Users router
app.use('/api/users', usersRouter);
//Genres Router
app.use('/api/genres', genresRouter);
// Actors Router
app.use('/api/actors', actorsRouter);
// TopRated Router
app.use('/api/toprated', topratedRouter);
// Upcoming Router
app.use('/api/upcoming', upcomingRouter);
app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});