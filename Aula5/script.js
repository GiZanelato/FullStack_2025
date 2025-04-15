//window.alert("hello world")

console.log("hello world");

//let nome = prompt("Qual o seu nome?");
//console.log(nome);

let i = 0;
while(i < 10){
    console.log(i);
    //i++;
    // i = i + 1;
    i += 1;
}


console.log("for");
for(let i =0; i < 10; i++){
    console.log(i);
}

//Ex 1:
console.log("Exercício 1");
for(let i = 1; i < 100; i += 2){
    console.log(i)
}

//Ex 2:
console.log("Exercício 2");
for(let i = 5; i < 500; i += 5){
    console.log(i)
}

//Ex 3:
console.log("Exercício 3");
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if(numero < 0){
    console.log("Numero invalido!")
}
for(let i = numero; i >= 0; i--){
    console.log(i);
}


//Ex 4:
console.log("Exercício 4");
let y = parseInt(prompt("Digite um número inteiro:"));
if(y < 0){
    console.log("Numero invalido!")
}

let mult = 1;
for(let i = y; i > 0; i--){
    mult = mult * i
    console.log(i , mult);
}

