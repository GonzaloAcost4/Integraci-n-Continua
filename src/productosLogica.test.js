import { describe, it, expect } from 'vitest';
import { ordenarPorPrecio, productos } from './productosLogica';

describe('ordenarPorPrecio', () => {
    it('ordena objetos mágicos del menor al mayor precio', () => {
        const lista = [
            { nombre: 'Escoba Nimbus 2000', precio: 50 },
            { nombre: 'Varita mágica', precio: 20 },
            { nombre: 'Capa de invisibilidad', precio: 200 },
            { nombre: 'Giratiempos', precio: 1000 },
        ];

        const resultado = ordenarPorPrecio(lista);

        expect(resultado).toEqual([
            { nombre: 'Varita mágica', precio: 20 },
            { nombre: 'Escoba Nimbus 2000', precio: 50 },
            { nombre: 'Capa de invisibilidad', precio: 200 },
            { nombre: 'Giratiempos', precio: 1000 },
        ]);
    });

    it('no modifica el array original', () => {
        const listaOriginal = [
            { nombre: 'Mapa del Merodeador', precio: 100 },
            { nombre: 'Snitch Dorada', precio: 50 },
        ];
        const copia = [...listaOriginal];

        ordenarPorPrecio(listaOriginal);
        expect(listaOriginal).toEqual(copia);
    });

    it('devuelve un array vacío si la lista está vacía', () => {
        const resultado = ordenarPorPrecio([]);
        expect(resultado).toEqual([]);
    });

    it('devuelve un nuevo array, no la misma referencia', () => {
        const lista = [
            { nombre: 'Piedra Filosofal', precio: 1 },
            { nombre: 'Diadema de Ravenclaw', precio: 2 },
        ];
        const resultado = ordenarPorPrecio(lista);
        expect(resultado).not.toBe(lista);
    });

    it('ordena correctamente el array productos exportado', () => {
        const resultado = ordenarPorPrecio(productos);
        const precios = resultado.map(p => p.precio);
        expect(precios).toEqual([20, 50, 200, 1000]);
    });

    it('funciona con objetos mágicos que tienen el mismo precio', () => {
        const lista = [
            { nombre: 'Cáliz de Fuego', precio: 10 },
            { nombre: 'Copa de Hufflepuff', precio: 10 },
            { nombre: 'Horcrux', precio: 5 },
        ];
        const resultado = ordenarPorPrecio(lista);
        expect(resultado).toEqual([
            { nombre: 'Horcrux', precio: 5 },
            { nombre: 'Cáliz de Fuego', precio: 10 },
            { nombre: 'Copa de Hufflepuff', precio: 10 },
        ]);
    });
});

