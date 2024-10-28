import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// Middleware para analisar o corpo das requisições no formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor está funcionando');
});

// Rota POST para validação de usuário e senha
app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  // Verifica se os parâmetros foram fornecidos
  if (!usuario || !senha) {
    return res.send('Por favor, forneça um usuário e uma senha.');
  }

  // Verifica se a senha é duas vezes o nome do usuário
  if (senha === usuario + usuario) {
    res.send('Usuário possui permissão de acesso.');
  } else {
    res.send('Usuário não possui permissão de acesso.');
  }
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
