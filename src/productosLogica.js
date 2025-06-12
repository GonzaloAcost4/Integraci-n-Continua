export const productos = [
    { nombre: 'Varita mágica', precio: 200 },
    { nombre: 'Capa de invisibilidad', precio: 200 },
    { nombre: 'Escoba Nimbus 2000', precio: 50 },
    { nombre: 'Giratiempos', precio: 1000 },
];

export function ordenarPorPrecio(lista) {
    return [...lista].sort((a, b) => a.precio - b.precio);
}
