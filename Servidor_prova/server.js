// Pacotes  necessários
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://professor:JUh95IMYZm7xWGPR@aulabd.cjihvk4.mongodb.net/?retryWrites=true&w=majority&appName=AulaBD`;

const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("prova");
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.redirect("usuarios/cadastro.html");
});

/////////////////////////////////////////////////////////////////////////
