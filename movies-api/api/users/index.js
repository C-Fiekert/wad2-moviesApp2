import express from 'express';
import User from './userModel';
import movieModel from '../movies/movieModel.js'
import jwt from 'jsonwebtoken';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', (req, res, next) => {
    User.find().then(users =>  res.status(200).json(users)).catch(next);
});

// Register OR authenticate a user
router.post('/', async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({
      success: false,
      msg: 'Please pass username and password.',
    });
  }
  if (req.query.action === 'register') {
    await User.create(req.body)/*.catch(next)*/;
    res.status(201).json({
      code: 201,
      msg: 'Successful created new user.',
    });
  } else {
    const user = await User.findByUserName(req.body.username).catch(next);
      if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          const token = jwt.sign(user.username, process.env.SECRET);
          // return the information including token as JSON
          res.status(200).json({
            success: true,
            token: 'BEARER ' + token,
          });
        } else {
          res.status(401).json({
            code: 401,
            msg: 'Authentication failed. Wrong password.'
          });
        }
      });
    }
});

// Update a user
router.put('/:id',  (req, res, next) => {
    if (req.body._id) delete req.body._id;
     User.update({
      _id: req.params.id,
    }, req.body, {
      upsert: false,
    })
    .then(user => res.json(200, user)).catch(next);
});

//Add a favourite. No Error Handling Yet. Can add duplicates too!
router.post( '/:userName/favourites', async  (req, res, next ) => {
  const userFavourite = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId( userFavourite );
  const user = await User.findByUserName( userName );

  if ( user == false ) {
    return res.status( 401 ).json({ code: 401, msg: 'Unable to find User' });
  }
  else if( movie == null || userFavourite == null ){
    res.status( 401 ).json({
      code: 401,
      msg: 'User ID or Movie ID is invalid' 
    })
  }
  else if( user.favourites.includes( movie._id ) ){
    res.status( 401 ).json({
      code: 401,
      msg: 'This movie is already in your favourites'
    })
  }
  else {
    await user.favourites.push( movie._id );
    await user.save(); 
    res.status( 201 ).json( user );
  }
});

router.get( '/:userName/favourites', ( req, res, next ) => {
  const userName = req.params.userName;
  User.findByUserName( userName ).populate( 'favourites' ).then(
    user => res.status( 201 ).json( user.favourites )
  ).catch( next );
});

router.delete( '/:userName/favourites', async  (req, res, next ) => {
  const userFavourite = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId( userFavourite );
  const user = await User.findByUserName( userName );

  if ( user == false ) {
    return res.status( 401 ).json({ code: 401, msg: 'Unable to find User' });
  }
  else if( movie == null || userFavourite == null ){
    res.status( 401 ).json({
      code: 401,
      msg: 'User ID or Movie ID is invalid' 
    })
  }
  else if( !user.favourites.includes( movie._id ) ){
    res.status( 401 ).json({
      code: 401,
      msg: 'This movie is is not in your favourites'
    })
  }
  else {
    //var i = 0;
    // while (user.favourites[i] != movie._id){
    //   i++;
    //   console.log(i);
    // }
    await user.favourites.pull({ _id: movie._id});

    // for (let i = 0; i < user.favourites.length; i++) {
    //   if (user.favourites[i] == movie._id) {
    //     console.log(i);
    //     await user.favourites.splice(i,1);
    //   }      
    // }
    // await user.favourites.splice(i,1);
    await user.save(); 
    res.status( 201 ).json( user );
  }
});

export default router;