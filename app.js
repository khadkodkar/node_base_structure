import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import fs from 'fs';
import apiRoutes from './src/routes';
import cors from 'cors';

const router = express.Router();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', apiRoutes);

const server = app.listen(port, () => {
  console.log(`Node Server ready at port: ${port}.`);
});
