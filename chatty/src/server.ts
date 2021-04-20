import express from 'express';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json()); //faz o express entender dados no formato de json

app.use(routes);

app.listen(3333);
