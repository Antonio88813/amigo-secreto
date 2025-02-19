// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];//array para los nombres
let sorteados = [];//array para los nombres ya sorteados
let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;//Expresión para permitir solo letras

//Función agregar amigo
function agregarAmigo(){
    let cambiarAmigo = document.getElementById('amigo');//Extrae el nombre del campo
    let nombreAmigo = cambiarAmigo.value.trim(); //Variable para agregar al array
     
    if (nombreAmigo == ""){//Revisa si el campo esta vacio
        document.getElementById('amigo').value = '';
        alert("Por favor, ingrese el nombre de un amigo.");
        return;
     } if (!regex.test(nombreAmigo)) {//Revisa que solo tenga letras y espacio entre palabras
        document.getElementById('amigo').value = '';
        alert("El nombre solo puede contener letras.");
        return;
    } if (amigos.includes(nombreAmigo)){//Revisa si el nombre esta repetido
        document.getElementById('amigo').value = '';
        alert("El nombre ya esta en la lista.");
        return;
     } else{//agrega el nombre al array
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        actualizarListaDeAmigos();
        return;
     }
}

//Función para que se vea la lista
function actualizarListaDeAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');//obtener el elemento de la lista
    listaAmigos.innerHTML = "";//Limpiar la lista existente 
    for (let i = 0; i < amigos.length; i++){//agregar a todos los amigos a la lista
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
    }
}

//Función para sortear amigos
function sortearAmigo(){
    if (amigos.length < 3) {//Pide minimo 3 nombres para iniciar el sorteo
        alert('Inserte el nombre de 3 amigos minimo')        
    } if (sorteados.length === amigos.length) { // Todos han sido sorteados
        alert("Todos los amigos ya fueron sorteados.");
        return;
    } else {
        let amigoSorteado;
    do {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);//elije un numero aleartorio dentro del rango para elegir el amigo
        amigoSorteado = amigos[amigoAleatorio];
    } while (sorteados.includes(amigoSorteado)); // Repetir si el amigo ya fue sorteado

    sorteados.push(amigoSorteado); // Marcar como sorteado

    let resultado = document.getElementById('resultado');//
    resultado.innerHTML = `Tu amigo secreto es <strong>${amigoSorteado}</strong>`;
    }   
}