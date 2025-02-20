// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log(amigos);

function agregarAmigo (){
    let amigosIngresados = document.getElementById ("amigo").value;
    
    if(amigosIngresados === "" ){
        alert ('por favor, inserte un nombre');

     } else{amigos.push(amigosIngresados);

        document.getElementById("amigo").value = "";

        listaDeAmigos();
        actualizarLista();

        return;
        
     }

     
     }



 function limpiarCampo (){
     document.getElementById("amigo").value = "";
     
 }

 function listaDeAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for ( let i = 0; i<amigos.length; i++ ){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }

   

  }
  

  function sortearAmigo(){
   if( amigos.length > 0){

  let amigosAleatorios  = Math.floor(Math.random()*amigos.length);
    let amigosSorteados = amigos[amigosAleatorios] ;

   const resultado = document.getElementById('resultado');
   resultado.innerHTML = `amigos sorteados :<strong>${amigosSorteados}</strong>`;
   
    

    listaDeAmigos();

   limpiarCampo();
 
    

   }
   
   
  }

  function actualizarLista() {
   let listaActualizadaAmigos = document.getElementById("listaAmigo");
   listaActualizadaAmigos.innerHTML = "";

  
   
  }
  
  
  
  