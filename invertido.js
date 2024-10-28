import Express from 'express';
const app = Express();
const port = 4000;

app.get('/inverter', (req, res) => {
  const texto = req.query.texto;

  
  if (!texto) {
    return res.send('Por favor, forneça um texto usando a query string ?texto=seuTexto');
  }
  const textoInvertido = texto.split('').reverse().join('');
  res.send(`Texto invertido: ${textoInvertido}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/inverter?texto=rodolfo`);
});
