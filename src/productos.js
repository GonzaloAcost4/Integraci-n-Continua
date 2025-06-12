import { productos, ordenarPorPrecio } from './productosLogica.js';

function mostrarProductos(lista) {
    const contenedor = document.getElementById('listaProductos');
    contenedor.innerHTML = '';
    lista.forEach(p => {
        const div = document.createElement('div');
        div.className = 'producto'; // Asegura que cada producto tenga la clase correcta
        div.textContent = `${p.nombre}: $${p.precio}`;
        contenedor.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    document.getElementById('ordenarBtn').addEventListener('click', () => {
        const ordenados = ordenarPorPrecio(productos);
        mostrarProductos(ordenados);
    });
});
