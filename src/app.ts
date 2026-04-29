import express from 'express';
import { cardHandler } from './handlers/card.handler';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post('/validate-card', cardHandler.ValidateCard);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
