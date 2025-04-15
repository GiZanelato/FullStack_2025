let x = Math.random()*100;
let valor = Math.floor(x);
window.alert(valor);




function guess(){
    let numero = parseInt(document.getElementById('num').value);
    
    let result = 0
    if(numero == valor){
        result = "Número igual"
        document.getElementById('resp').style.setProperty("background-color", "green") 
    }
    else if(numero > valor){
        result = "Número menor"
        document.getElementById('resp').style.setProperty("background-color", "red") 
    }
    else{
        result = "Número maior"
        document.getElementById('resp').style.setProperty("background-color", "red") 
    }

    document.getElementById('resp').innerHTML = result;
}