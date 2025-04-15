// funções:

function desenhar_quadrado(ctx,esp,cor1,cor2,x,y,a,b){
    ctx.beginPath();
    ctx.lineWidth = esp;
    ctx.fillStyle = cor1;
    ctx.strokeStyle = cor2;
    ctx.fillRect(x,y,a,b);
    ctx.strokeRect(x,y,a,b);
    ctx.closePath();
}

function desenhar_linha(ctx,esp,cor1,cor2,x,y,pontos){
    ctx.beginPath();
    ctx.lineWidth = esp;
    ctx.fillStyle = cor1;
    ctx.strokeStyle = cor2;
    ctx.moveTo(x,y);
    for (let i = 0; i < pontos.length; i++) {
        ctx.lineTo(pontos[i][0], pontos[i][1]);
    };
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

//Canvas 1:

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');


desenhar_quadrado(ctx1,2,'blue','blue',0,0,60,60);

desenhar_quadrado(ctx1,2,'red','red',240,0,60,60);

desenhar_quadrado(ctx1,2,'aquamarine','aquamarine',0,120,30,60);

desenhar_quadrado(ctx1,2,'aquamarine','aquamarine',270,135,30,30);

desenhar_quadrado(ctx1,2,'red','red',110,150,40,40);

desenhar_quadrado(ctx1,2,'yellow','yellow',0,240,30,60);

desenhar_quadrado(ctx1,2,'yellow','yellow',0,270,60,30);

desenhar_quadrado(ctx1,2,'black','black',270,240,30,60);

desenhar_quadrado(ctx1,2,'black','black',240,270,60,30);

desenhar_linha(ctx1,1,'blue','blue',0,0,[[150,150]]);

desenhar_linha(ctx1,1,'red','red',300,0,[[150,150]]);

desenhar_linha(ctx1,1,'green','green',0,150,[[300,150]]);

desenhar_linha(ctx1,1,'grey','grey',150,150,[[150,300]]);

desenhar_arco(ctx1,1,'transparent','green',150,150,70,1,0);

desenhar_arco(ctx1,1,'aquamarine','green',150,300,45,1,0);

desenhar_arco(ctx1,1,'aquamarine','blue',150,110,17,0,2);

desenhar_arco(ctx1,1,'yellow','green',75,200,17,0,2);

desenhar_arco(ctx1,1,'yellow','green',225,200,17,0,2);

desenhar_arco(ctx1,1,'transparent','green',150,150,90,1,1.25);

desenhar_arco(ctx1,1,'transparent','green',150,150,90,1.75,2);

desenhar_arco(ctx1,1,'transparent','green',150,300,65,1.5,1);

desenhar_arco(ctx1,1,'transparent','green',150,300,80,1,1.5);

escrever(ctx1,2,'black',"20px Arial","center","Canvas",150,50);

// 2° Canvas:

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');


desenhar_quadrado(ctx2,2,'grey','grey',0,220,300,100);

desenhar_quadrado(ctx2,2,'rgb(134, 53, 33)','rgb(134, 53, 33)',110,140,80,80);

desenhar_quadrado(ctx2,2,'brown','brown',40,170,20,50);

desenhar_quadrado(ctx2,2,'brown','brown',260,210,20,50);

desenhar_quadrado(ctx2,2,'rgb(0, 145, 255)','rgb(0, 145, 255)',0,220,40,130);

desenhar_quadrado(ctx2,2,'rgb(0, 145, 255)','rgb(0, 145, 255)',40,260,70,40);

desenhar_quadrado(ctx2,2,'rgb(102, 24, 4)','rgb(102, 24, 4)',141.75,180,16.5,40);  

desenhar_quadrado(ctx2,2,'rgb(7, 226, 255)','rgb(7, 226, 255)',158.25,155,24.75,24.75);

desenhar_quadrado(ctx2,2,'rgb(7, 226, 255)','rgb(7, 226, 255)',117,155,24.75,24.75); 

desenhar_linha(ctx2,1,'rgb(250, 98, 81)','rgb(250, 98, 81)',110,140,[[150,100],[190,140]]);

desenhar_arco(ctx2,2,'yellow','transparent',220,60,40,0,2*Math.PI);

desenhar_arco(ctx2,2,'rgb(20, 169, 17)','transparent',50,160,25,0,2*Math.PI);

desenhar_arco(ctx2,2,'rgb(0, 145, 255)','rgb(0, 145, 255)',0,220,40,1*Math.PI,2*Math.PI);

desenhar_arco(ctx2,2,'rgb(0, 145, 255)','rgb(0, 145, 255)',110,301,40,1*Math.PI,2*Math.PI);

desenhar_arco(ctx2,2,'rgb(20, 169, 17)','transparent',270,200,25,0,2*Math.PI);







