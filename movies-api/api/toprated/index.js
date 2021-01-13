import express from 'express';
import topratedModel from './topratedModel.js'

const router = express.Router();

router.get('/', (req, res, next) => {
  topratedModel.find().then(toprated => res.status(200).send(toprated)).catch(next);
});

export default router;