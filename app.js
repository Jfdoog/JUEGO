let numeroSecrerto = 0;
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asiganarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =(texto);
    return;

}

function verificarIntento ()  {
let numeroDeusuario = parseInt(document.getElementById("valorUsuario").value);

if(numeroDeusuario === numeroSecrerto) {
  asiganarTextoElemento("p",`acertaste el numero en ${intentos}  ${(intentos === 1) ? "vez" : "veces"}`);  
  document.getElementById("reiniciar").removeAttribute("disabled");
} else{
    //El usuario no acerto
    if(numeroDeusuario>numeroSecrerto){
    asiganarTextoElemento("p","numero secreto es menor");
    

    }else{
        asiganarTextoElemento("p","numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";


}

function generarNumeroSercreto() {
let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
// si el numero generado esta incluido en la lista se 
//poder sortear numeros
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length == numeroMaximo){
asiganarTextoElemento("p","ya se sortearon todos los numeros posibles");
}  else{

}
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSercreto();
} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
 }

 function condiconesIniciales() {

 asiganarTextoElemento("h1","juego del numero secretooo");
 asiganarTextoElemento("p",`Escoge un numero DEL 1 al ${numeroMaximo}`);

numeroSecrerto = generarNumeroSercreto();
intentos = 1;
    
}


  function reiniciarJuego() {
    //limpiar la caja para reiniciar el juego
    limpiarCaja();
    //indicar mensaje de 1 a 100
    condiconesIniciales();
    //generar numero aleatorio 
    //inicializar el numero de intentos       
  //desabilitar el boton de nuevo juego 
//inicializar el numero de intentos 
 document.querySelector("#reiniciar").setAttribute("disabled","true");    

  }
    
    

condiconesIniciales();
