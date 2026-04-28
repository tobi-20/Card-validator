import express from 'express';
import { cardHandler } from './card/handlers';

const app = express();

app.use(express.json());

app.post('/validate-card', cardHandler.ValidateCard);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
