 // Aquí tu código

const btn = document.getElementById('agregar');
const lista = document.getElementById('lista');

btn.addEventListener('click', function () {
  const newItem = prompt('Escribe el nuevo elemento:');
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = newItem;
  lista.appendChild(nuevoElemento);
});


// Aquí el código hecho en la Live review. Condicional para que en caso que se cancele el prompt o se escriba un texto vacío (solo espacios), que no haga nada

/* const lista = document.getElementById("lista")
const agregar = document.getElementById("agregar")
const input = document.getElementById("input") */

// agregar.addEventListener("click", function() {
//   const producto = prompt("Añade un producto")
//   if(producto && producto.trim() !== "") {
//     const li = document.createElement("li")
//     li.textContent = producto
//     lista.appendChild(li)
//   }
// })

// Aquí lo hacemos con un input que se debe de añadir al HTML
// agregar.addEventListener("click", function() {
//   const producto = input.value
//   if(producto && producto.trim() !== "") {
//     const li = document.createElement("li")
//     li.textContent = producto
//     lista.appendChild(li)
//     input.value = ""
//   }
// })

/* agregar.addEventListener("click", function () {
  const producto = input.value
  if (producto && producto.trim() !== "") {
    lista.innerHTML += `<li>${producto}</li>`
    input.value = ""
  }
}) */
