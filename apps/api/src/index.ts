import cors from 'cors';
import type { Response } from 'express';
import express, { json, urlencoded } from 'express';
import type { ConnectOptions } from 'mongoose';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { authRouter, userRouter } from './routes';

const app = express();
const port = 4200;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(json());

const mongooseOptions: ConnectOptions = {};

mongoose
  .connect('mongodb://localhost:27017/wishlus', mongooseOptions)
  .then(() => {
    console.warn('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/ping', (_, response: Response) => {
  response.json({ response: 'pong' });
});

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.warn(`Listening on http://localhost:${port}`);
});
