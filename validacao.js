import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor está funcionando');
});

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.send('Por favor, forneça um usuário e uma senha.');
  }

  if (senha === usuario + usuario) {
    res.send('Usuário possui permissão de acesso.');
  } else {
    res.send('Usuário não possui permissão de acesso.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
