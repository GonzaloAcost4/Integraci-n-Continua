export const productos = [
    { nombre: 'Pantalón', precio: 20 },
    { nombre: 'Abrigo', precio: 200 },
    { nombre: 'Camisa', precio: 50 },
    { nombre: 'Zapatos', precio: 1000 },
];

export function ordenarPorPrecio(lista) {
    return [...lista].sort((a, b) => a.precio - b.precio);
}
