// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un Array para almacenar nombres

let listaNombres = [];

// Implementar una funcion para agregar amigos

function agregarAmigo(){
    let inputName = document.getElementById('amigo').value;
    let nombre = inputName.trim();
    // Verificaciones 
    if(nombre === ""){
        alert("Error, por favor ingrese un nombre");
        return;
    }
    if(listaNombres.includes(nombre)){
        alert(`Error , el nombre "${nombre}" ya se encontraba en la lista`);
        return;
    }
    // Agregar el nombre a la lista.
    listaNombres.push(nombre);
    // Limpiar campos de input
    limpiarCaja();
    // Actualizar lista de nombres en el html.   
    actualizarListaAmigo();
    }



// Implementar una funcion para actualizar la lista de amigos
    function actualizarListaAmigo(){
        const listaAmigos = document.getElementById('listaAmigos');
        //limpiar el campo actual
        listaAmigos.innerHTML = "";
        // Foreach Recorre el array ejecutando la funcion por cada elemento
        listaNombres.forEach(nombre => {
            const li = document.createElement('li');
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }
// Implementar una funcion para sortear los amigos

// function extras

function limpiarCaja (){
    document.getElementById('amigo').value = '';
}