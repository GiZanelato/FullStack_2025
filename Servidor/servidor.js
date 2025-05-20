require("colors");
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");


const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://uniegzanelato:eudnTy7DN9K9LcAd@aulabd.pluijcv.mongodb.net/?retryWrites=true&w=majority&appName=AulaBD'
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("AulaBD");
var usuario = dbo.collection("usuario");
var posts = dbo.collection("posts");
var usuario_carros = dbo.collection("usuario_carros");
var carros = dbo.collection("carros");


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

// Métodos e actions:

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

    usuario.insertOne(data, function(err){
        if(err){
            resposta.render("resposta", {status: "Erro", Nome, Login, Senha, Nasc});
        }
        else{
            resposta.render("resposta", {status: "Sucesso", Nome,Login,Senha,Nasc});
        }

    })

})

app.post('/logar2', function(requisicao,resposta){
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    console.log(Login, Senha);

    var data = {db_login: Login, db_senha: Senha};

    usuario.find(data).toArray(function(err, items){
        console.log(items)
        if(err){
            //erro ao logar
            resposta.render("resposta_login",{status: "erro ao logar"});

        }
        else if(items.length == 0){
            //não encontrou usuario
           resposta.render("resposta_login",{status: "usuario/senha não encontrado"});

        }
        else{
            //usuario encontrado
            resposta.render("resposta_login",{status: "usuario "+Login+" logado"});
        }
    })
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

////////////////////////////////////////////////////////////
// Lab 9:

app.get("/blog", function(req, resp) {
    posts.find().toArray(function(err, items) {
        if (err) {
            resp.send("Erro ao buscar os posts.");
        } else {
            console.log(items); // apenas para debug
            resp.render("blog", { posts: items });
        }
    });
});


app.get("/criar_post", function(requisicao,resposta){   
    resposta.redirect("../Aula11/Lab9/cadastrar_post.html")
})

app.post("/cadastrar_post",function(requisicao,resposta){
    let titulo = requisicao.body.titulo;
    let resumo = requisicao.body.resumo;
    let conteudo = requisicao.body.conteudo;
   

    console.log(titulo, resumo, conteudo);

    var data = { db_titulo: titulo, db_resumo: resumo, db_conteudo: conteudo};

    posts.insertOne(data, function(err){
        if(err){
            resposta.render("resposta_lab9", {status: "erro", titulo, resumo, conteudo});
        }
        else{
            resposta.render("resposta_lab9", {status: "sucesso", titulo, resumo, conteudo});
        }

    })

})




//////////////////////////////////////////////////////////////
app.post('/atualizar_senha', function(requisicao,resposta){
    let login = requisicao.body.Login;
    let senha = requisicao.body.Senha;
    let novasenha = requisicao.body.novasenha;

    let data = {db_login: Login, db_senha: Senha}
    let new_data = {$set : {db_senha : novasenha}}

    usuarios.updateOne(data, new_data, function (err, result) {
        console.log(result);

        if (result.modifiedCount == 0) {
          resp.render('resposta_login', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_login', {resposta: "Erro ao atualizar usuário!"})
        }else {
          resp.render('resposta_login', {resposta: "Usuário atualizado com sucesso!"})        
        };
      });
  
})


///////////////////////////////////////////////////////////////////////////////////////////

//Lab10:

app.post("/cadastrar_usuario", function(req, resp) {

    let data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    // salva dados no banco
    usuario_carros.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario.ejs', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario.ejs', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });

});


app.post("/logar_usuario", function(req, resp) {

    let data = {db_login: req.body.login, db_senha: req.body.senha };

    // busca um usuário no banco de dados
    usuario_carros.find(data).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao logar usuário!"})
        }else {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário logado com sucesso!"})        
        };
      });

});


app.post("/cadastrar_carro", function(req, resp) {

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde: req.body.qtde};

    // salva dados no banco
    carros.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_carros.ejs', {resposta: "Erro ao cadastrar carro!"})
      }else {
        resp.render('resposta_carros.ejs', {resposta: "Carro cadastrado com sucesso!"})        
      };
    });

});

app.post("/atualizar_carro", function(req, resp) {

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde: req.body.qtde};
    let newData = { $set: {db_marca: req.body.novamarca, db_modelo: req.body.novomodelo, db_ano: req.body.novoano, db_qtde: req.body.novaqtde} };

    // atualiza informações do carro
    carros.updateOne(data, newData, function (err, result) {
          console.log(result);
          if (result.modifiedCount == 0) {
            resp.render('resposta_carros.ejs', {resposta: "Carro não encontrado!"})
          }else if (err) {
            resp.render('resposta_carros.ejs', {resposta: "Erro ao atualizar carro!"})
          }else {
            resp.render('resposta_carros.ejs', {resposta: "Carro atualizado com sucesso!"})        
          };
    });

});


app.post("/remover_carro", function(req, resp) {

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde: req.body.qtde};

    // remove carro
    carros.deleteOne(data, function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
          resp.render('resposta_carros.ejs', {resposta: "Carro não encontrado!"})
        }else if (err) {
          resp.render('resposta_carros.ejs', {resposta: "Erro ao remover carro!"})
        }else {
          resp.render('resposta_carros.ejs', {resposta: "Carro removido com sucesso!"})        
        };
      });
});


app.get("/lista_carros", function(req, resp) {

    // busca todos os usuarios no banco de dados
    carros.find().toArray(function(err, items) {
        // renderiza a resposta para o navegador
        resp.render("lista_carros.ejs", { carros: items });
      });

});

app.post("/vender_carro", function(req, resp) {
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const ano = req.body.ano;

  const filtro = { db_marca: marca, db_modelo: modelo, db_ano: ano };

  carros.findOne(filtro, function(err, carro) {
    if (err || !carro) {
      return resp.render('resposta_carros.ejs', {resposta: "Carro não encontrado!"});
    }
  
    const qntAtual = parseInt(carro.db_qtde);
  
    if (qntAtual <= 0) {
      return resp.render('resposta_carros.ejs', {resposta: "Carro esgotado!"});
    }
  
    if (qntAtual === 1) {
      carros.deleteOne(filtro, function(err, result) {
        if (err || result.deletedCount === 0) {
          return resp.render('resposta_carros.ejs', {resposta: "Erro ao remover carro esgotado!"});
        }
  
        carros.find().toArray(function(err, items) {
          resp.render('lista_carros.ejs', {carros: items, mensagem: "Carro vendido! Estoque esgotado, anúncio removido."});
        });
      });
    } else {
      const novaQnt = qntAtual - 1;
  
      carros.updateOne(filtro, { $set: { db_qtde: novaQnt } }, function(err, result) {
        if (err || result.modifiedCount === 0) {
          return resp.render('resposta_carros.ejs', {resposta: "Erro ao vender o carro!"});
        }
  
        carros.find().toArray(function(err, items) {
          resp.render('lista_carros.ejs', {carros: items, mensagem: "Carro vendido com sucesso!"});
        });
      });
    }
  });
  
});
