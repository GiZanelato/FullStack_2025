require("colors");
var http = require("http");
var express = require("express");
let bodyParser = require("body-parser")

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);

// Métodos e actions

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("GIOVANNA/index.html")
})
    

app.post("/inicio", function(requisicao,resposta){
    resposta.redirect("GIOVANNA/index.html")
})

//get so de exmplo 
app.get("/cadastrar",function(requisicao,resposta){
    let Nome = requisicao.query.Nome;
    let Login = requisicao.query.Login;
    let Senha = requisicao.query.Senha;
    let Nasc = requisicao.query.Nascimento;

    console.log(Nome, Login, Senha, Nasc)
})

//informações pessoais de cadastro usa post
app.post("/cadastrar",function(requisicao,resposta){
    let Nome = requisicao.body.Nome;
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    let Nasc = requisicao.body.Nascimento;

    console.log(Nome, Login, Senha, Nasc);

    resposta.render("resposta",{Nome, Login, Senha, Nasc});
})