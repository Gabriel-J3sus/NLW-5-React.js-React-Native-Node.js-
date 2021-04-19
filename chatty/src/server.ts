import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('olá');
});

app.post('/', (request, response) => {
  return response.json({ message: "Usúario salvo" });
})

app.listen(3333);
