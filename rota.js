import Express from 'express';
const app = Express();
const port = 3000;

app.get('/rota1', (req, res) => {
  res.send('<h1>Está é a rota 1</h1><a href="/rota2">Ir para a rota 2</a>');
})

app.get('/rota2', (req, res) => {
  res.send('<h1>Está é a rota 2</h1><a href="/rota1">Ir para a rota 1</a>');
})

app.listen(port, () => 
  console.log(`Servidor iniciado na porta http://localhost:${port}/rota1`)
);