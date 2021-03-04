const express = require('express');
const app = express();

let listaUsuario = [
    "rafael",
    "ivens",
    "marcia",
    "samuka"
]
//Query Params
// Ex: localhost:3000/usuario?id=1
app.get('/usuarios', (req, res) => {
    const {nome} = req.query;
    let listaRetorno = listaUsuario.filter(i => i.includes(nome || ''));
    return res.json(listaRetorno)
});

app.get('/:usuario', (req, res) => {
    const {usuario} = req.params;
    return res.send(`Hello word ${usuario}!`)
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});