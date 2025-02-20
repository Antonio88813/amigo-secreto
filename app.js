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
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement('li');
        lista.textContent = amigos[i];

        // Crear botón de eliminación
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("delete-button");
        botonEliminar.onclick = function() {
            eliminarAmigo(i);
        };
        lista.appendChild(botonEliminar); // Agregar el botón al elemento <li>
        listaAmigos.appendChild(lista);   // Agregar el <li> a la lista
        lista.classList.add('friend-list')//Estilo para la lista
    }
}

//Función para sortear amigos
function sortearAmigo(){
    if (amigos.length < 3) {//Pide minimo 3 nombres para iniciar el sorteo
        alert('Inserte el nombre de 3 amigos minimo');
        return;
    } if (amigos.length === sorteados.length){
        document.getElementById('reiniciar-sorteo').removeAttribute('disabled');//Activar boton para volver a sortear a los amigos
        alert("Todos los amigos ya fueron sorteados.");//Mensaje para avisar que se activo el boton 'volver a sortear amigos'
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
        return;
    } 
}

//Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo en la posición index
    actualizarListaDeAmigos(); // Actualiza la lista en la pantalla
}

//Función para volver a sortear amigos
function reiniciarJuego(){
    sorteados = [];
    document.getElementById("resultado").innerHTML = "El sorteo vuelve a empezar";
    document.getElementById('reiniciar-sorteo').setAttribute('disabled','true');
}

//Función para eliminar todos los nombres
function eliminarTodoLosAmigos(){
    amigos = [];
    sorteados = [];
    document.getElementById("resultado").innerHTML = "";
    actualizarListaDeAmigos()
}