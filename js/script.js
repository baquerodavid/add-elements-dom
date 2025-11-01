 // Aquí tu código

const btn = document.getElementById('agregar');
const lista = document.getElementById('lista');

btn.addEventListener('click', function () {
  const newItem = prompt('Escribe el nuevo elemento:');
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = newItem;
  lista.appendChild(nuevoElemento);
});