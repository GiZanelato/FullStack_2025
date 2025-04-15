let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//retângulos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.closePath();


// linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(120,120);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();


// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);  // arco completo 0 pi até 2 pi e meio arco é 1,5 pi ate 2,5 pi
ctx.fill();
ctx.stroke();
ctx.closePath();


// texto
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",200,350)
ctx.fillText("Olá",195,350);
ctx.closePath();

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 1:
let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

//retângulo vermelho
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.fillRect(0,0,60,60);
ctx2.strokeRect(0,0,60,60);
ctx2.closePath();

//retângulo azul
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.fillRect(340,0,60,60);
ctx2.strokeRect(340,0,60,60);
ctx2.closePath();

//retângulo Amarelo
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.fillRect(0,340,60,60);
ctx2.strokeRect(0,340,60,60);
ctx2.closePath();

//retângulo verde
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.fillRect(340,340,60,60);
ctx2.strokeRect(340,340,60,60);
ctx2.closePath();

// linha vermelha
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// linha Azul
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.moveTo(400,0);
ctx2.lineTo(0,400);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// linha VERDE  
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// arco
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'transparent';
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,70,0*Math.PI,1*Math.PI); 
ctx2.fill();
ctx2.stroke();
ctx2.closePath();


// circulo 1
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(80,140,20,0*Math.PI,2*Math.PI); 
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// circulo 2
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(340,140,20,0*Math.PI,2*Math.PI); 
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// texto
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'black';
ctx2.font = "20px Arial"
ctx2.textAlign = "center";
ctx2.fillText("Desenvolvimento web",200,90);
ctx2.closePath();

///////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 3:

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');

//retângulo cinza:
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'grey';
ctx3.fillRect(0,300,400,200);
ctx3.closePath();

//retângulo azul 1:
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'blue';
ctx3.fillRect(0,300,60,100);
ctx3.closePath();


//retângulo azul 2:
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'blue';
ctx3.fillRect(0,350,160,60);
ctx3.closePath();

//retângulo marrom:
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'brown';
ctx3.fillRect(150,200,100,100);
ctx3.closePath();

// triangulo:
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'orange';
ctx3.strokeStyle = 'orange';
ctx3.moveTo(400,0);
ctx3.lineTo(0,400);
ctx3.fill();
ctx3.stroke();
ctx3.closePath();
