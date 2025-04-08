
// let carro = {
//     cor:'green',
//     modelo:'SUV',
//     marca:'Toyota',
//     buzina:function(){
//         return 'bii bii';
//     }
// };


// let carro2 = {
//     cor:'black',
//     modelo:'SUV',
//     marca:'Ford',
//     buzina:function(){
//         return 'fom fom';
//     }
// };

// class para deixar o processo anterior mais rapido
class Carro {
    constructor(cor, modelo, marca){
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;  
    }
    buzina(){
        return 'bii bii';
    }
}

// com a class anterior só precisa colocar essa linha para fazer todo o processo de criar um novo carro
let carro1 = new Carro('green', 'SUV', 'Toyota');
let carro2 = new Carro('Black', 'SUV', 'Ford');

console.log(carro1);
console.log(carro2);



// console.log(carro);
// console.log(carro.cor);

// console.log(carro.buzina());
// console.log(carro2.buzina());


// imprime a buzina de todos os carros que forem criados 
let carros = []
carros.push(carro1)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){   //length vê o tamanho
    console.log(carros[i].buzina());

}


class Retangulo{
    constructor(cor_linha, cor_preenchimento, espessura_linha, x , y, largura, altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha;
        contexto.fillRect(this.x , this.y, this.largura , this.altura);
        contexto.strokeRect(this.x , this.y, this.largura , this.altura);
        contexto.closePath();
    }
}

let canvas = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

let retandulo_1 = new Retangulo('pink', 'white', 3, 0, 0, 20, 20);
retandulo_1.desenhe(ctx1);

// retandulo_1.x = 100;  //muda apenas o valor do x
// retandulo_1.desenhe(ctx1);   //desenha o retangulo 1 novamente mas com o novo valor de x

function animacao(){
    retandulo_1.x += 1;
    ctx1.clearRect(0,0,400,400);
    retandulo_1.desenhe(ctx1);


    requestAnimationFrame(animacao)
}

animacao();