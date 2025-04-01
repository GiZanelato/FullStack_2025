// 1° Canvas:

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

function desenhar_quadrado(ctx,esp,cor1,cor2,x,y,a,b){
    ctx.beginPath();
    ctx.lineWidth = esp;
    ctx.fillStyle = cor1;
    ctx.strokeStyle = cor2;
    ctx.fillRect(x,y,a,b);
    ctx.strokeRect(x,y,a,b);
    ctx.closePath();
}

function desenhar_linha(ctx,esp,cor1,cor2,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = esp;
    ctx.fillStyle = cor1;
    ctx.strokeStyle = cor2;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(ctx,esp,cor1,cor2,x,y,tam,a,b){
    ctx.beginPath();
    ctx.lineWidth = esp;
    ctx.fillStyle = cor1;
    ctx.strokeStyle = cor2;
    ctx.arc(x,y,tam,a*Math.PI,b*Math.PI); 
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
} 


function escrever(ctx,esp,cor,font,align,texto,x,y){
    ctx.beginPath();
    ctx.lineWidth = esp;
    ctx.fillStyle = cor;
    ctx.font = font
    ctx.textAlign = align;
    ctx.fillText(texto,x,y);
    ctx.closePath();
}


desenhar_quadrado(ctx1,2,'blue','blue',0,0,60,60);

desenhar_quadrado(ctx1,2,'red','red',240,0,60,60);

desenhar_quadrado(ctx1,2,'aquamarine','aquamarine',0,120,30,60);

desenhar_quadrado(ctx1,2,'aquamarine','aquamarine',270,135,30,30);

desenhar_quadrado(ctx1,2,'red','red',110,150,40,40);

desenhar_quadrado(ctx1,2,'yellow','yellow',0,240,30,60);

desenhar_quadrado(ctx1,2,'yellow','yellow',0,270,60,30);

desenhar_quadrado(ctx1,2,'brown','brown',270,240,30,60);

desenhar_quadrado(ctx1,2,'brown','brown',240,270,60,30);

desenhar_linha(ctx1,1,'blue','blue',0,0,150,150);

desenhar_linha(ctx1,1,'red','red',300,0,150,150);

desenhar_linha(ctx1,1,'green','green',0,150,300,150);

desenhar_linha(ctx1,1,'grey','grey',150,150,150,300);

desenhar_arco(ctx1,1,'transparent','green',150,150,70,1,0);

desenhar_arco(ctx1,1,'aquamarine','green',150,300,50,1,0);

desenhar_arco(ctx1,1,'aquamarine','blue',150,110,17,0,2);

desenhar_arco(ctx1,1,'yellow','green',75,200,17,0,2);

desenhar_arco(ctx1,1,'yellow','green',225,200,17,0,2);

desenhar_arco(ctx1,1,'transparent','green',150,150,90,1,1.25);

desenhar_arco(ctx1,1,'transparent','green',150,150,90,1.75,2);





escrever(ctx1,2,'black',"20px Arial","center","Canvas",150,50);









