const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function calcularProdutorioRecursivo(m, n) {
  if (m === n) {
    return m;
  } else {
    return m * calcularProdutorioRecursivo(m + 1, n);
  }
}

function calcularProdutorioIterativo(m, n) {
  let produtorio = 1;

  for (let i = m; i <= n; i++) {
    produtorio *= i;
  }

  return produtorio;
}

app.post('/produtorio', (req, res) => {
  const { m, n, metodo } = req.body;
  let produtorio;

  if (metodo === 'recursiva') {
    produtorio = calcularProdutorioRecursivo(m, n);
  } else if (metodo === 'iterativa') {
    produtorio = calcularProdutorioIterativo(m, n);
  } else {
    return res.status(400).json({ error: 'Método inválido' });
  }

  res.json({ response: produtorio });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
