# PRODUTORIO USANDO API NODE
### Author: Douglas Marinho RA: 082190029
## Como usar
- Na pasta principal, execute `npm install`
- Execute `node index.js`
- Abra o Postman e use o endpoint `localhost:3000/produtorio` com método `POST`
- Request esperado (JSON):
`
{
    "m": 2,
    "n": 5,
    "metodo": "iterativa" //recursiva
}
`