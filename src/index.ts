import express from 'express';
import { getState, setState } from './state';
import { init } from './init';

const app = express();
const port = 3000;

// TODO riuting в отдельную папку
app.get('/', (req, res) => {
  const state = getState();

  res.send({ some: state });
});

// value2++
app.get('/value', (req, res) => {
  const state = getState();
  setState({ value2: state.value2++ });

  res.send({ some: state });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
  init();
});
