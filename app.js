// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];//array para los nombres

//Función agregar amigo
function agregarAmigo(){
    let cambiarAmigo = document.getElementById('amigo');//Extrae el nombre del campo
    let nombreAmigo = cambiarAmigo.value.trim(); //Variable para agregar al array
     
    if (nombreAmigo == ""){//Revisa si el campo esta vacio
        alert("Por favor, ingrese el nombre de un amigo.");
        return;
     } if (amigos.includes(nombreAmigo)){//Revisa si el nombre esta repetido
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
