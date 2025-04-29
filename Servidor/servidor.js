require("colors");
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
// var mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;
// const uri = 'mongodb+srv://uniegzanelato:@uniezanelato2025@aulabd.pluijcv.mongodb.net/?retryWrites=true&w=majority&appName=AulaBD'
// const client = new MongoClient(uri, { useNewUrlParser: true });

// var dbo = client.db("AulaBD");
// var usuarios = dbo.createCollection("usuarios",);

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

let usuarios = [];  // Array para armazenar os cadastros

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);

// Métodos e actions

app.get("/", function(requisicao,resposta){    // ir direto para a pagina home ao acessar o localhost
    resposta.redirect("GIOVANNA/index.html")
})

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

    var data = { db_nome: Nome, db_login: Login, db_senha: Senha, db_nasc: Nasc };

    usuarios.insertOne(data, function(err){
        console.log(err)
        if (err){
            resp.render('resposta', {resposta: "Erro ao cadastrar usuário!"})
        }
        else {
            resp.render('resposta', {resposta: "Usuário cadastrado com sucesso!"})  
        }

    })

    resposta.render("resposta",{Nome, Login, Senha, Nasc});
})

app.get("/for_ejs", function(requisicao,resposta){
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for",{valor});
})


////////////////////////////////////////////////////////////
//lab 8:

app.post("/cadastra", function(requisicao, resposta){
    let Nome = requisicao.body.Nome;
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    let Nasc = requisicao.body.Nascimento;

    // Armazena os dados no array
    usuarios.push({ Nome, Login, Senha, Nasc });

    console.log("Usuário cadastrado:", { Nome, Login, Senha, Nasc });


    resposta.redirect("/Aula10/Lab8/login.html");

});

app.post("/logar", function(requisicao, resposta) {
    let login = requisicao.body.Login;
    let senha = requisicao.body.Senha;

    // Procura o usuário no array
    let usuario = usuarios.find(u => u.Login === login && u.Senha === senha);

    let status;
    if (usuario) {
        status = "Login realizado com sucesso. Bem-vindo(a)!";
    } else {
        status = "Login falhou. Usuário ou senha incorretos.";
    }

    resposta.render("resposta_lab8", { status });
});