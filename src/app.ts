import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
  })
);

app.use(router);

export default app;
