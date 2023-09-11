import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { routes as exchangeRateRoutes } from './exchange-rate/routes';
import { routes as helloRoutes } from './health/routes';

import * as pino from 'pino-http';
import errorMiddleware from './error';
export const app: express.Application = express()

app.use(pino.pinoHttp())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/healthcheck', helloRoutes)
app.use('/exchange-rate', exchangeRateRoutes)

app.use('*', (req: express.Request, res: express.Response) =>
  res.status(404).send(`Not found: ${req.url}`)
)

app.use(errorMiddleware)
