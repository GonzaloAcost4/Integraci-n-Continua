import { describe, it, expect } from 'vitest';
import { ordenarPorPrecio, productos } from './productosLogica';

describe('ordenarPorPrecio', () => {
    it('ordena los productos mágicos del menor al mayor precio', () => {
        const resultado = ordenarPorPrecio(productos);
        const precios = resultado.map(p => p.precio);
        expect(precios).toEqual([20, 50, 200, 1000]);
    });
});