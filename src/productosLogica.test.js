import { describe, it, expect } from 'vitest';
import { ordenarPorPrecio, productos } from './productosLogica';

describe('ordenarPorPrecio', () => {
    it('ordena prendas del menor al mayor precio', () => {
        const lista = [
            { nombre: 'Camisa', precio: 50 },
            { nombre: 'Pantalón', precio: 20 },
            { nombre: 'Abrigo', precio: 200 },
            { nombre: 'Zapatos', precio: 1000 },
        ];

        const resultado = ordenarPorPrecio(lista);

        expect(resultado).toEqual([
            { nombre: 'Pantalón', precio: 20 },
            { nombre: 'Camisa', precio: 50 },
            { nombre: 'Abrigo', precio: 200 },
            { nombre: 'Zapatos', precio: 1000 },
        ]);
    });

    it('no modifica el array original', () => {
        const listaOriginal = [
            { nombre: 'Bufanda', precio: 100 },
            { nombre: 'Gorra', precio: 50 },
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
            { nombre: 'Remera', precio: 1 },
            { nombre: 'Short', precio: 2 },
        ];
        const resultado = ordenarPorPrecio(lista);
        expect(resultado).not.toBe(lista);
    });

    it('ordena correctamente el array productos exportado', () => {
        const resultado = ordenarPorPrecio(productos);
        const precios = resultado.map(p => p.precio);
        expect(precios).toEqual([20, 50, 200, 1000]);
    });

    it('funciona con prendas que tienen el mismo precio', () => {
        const lista = [
            { nombre: 'Guantes', precio: 10 },
            { nombre: 'Cinturón', precio: 10 },
            { nombre: 'Medias', precio: 5 },
        ];
        const resultado = ordenarPorPrecio(lista);
        expect(resultado).toEqual([
            { nombre: 'Medias', precio: 5 },
            { nombre: 'Guantes', precio: 10 },
            { nombre: 'Cinturón', precio: 10 },
        ]);
    });
});

