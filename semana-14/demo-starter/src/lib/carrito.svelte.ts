import type { Producto } from './types';

export const carrito = $state({
  items: [] as Producto[],
});

export function agregar(producto: Producto) {
  const yaEsta = carrito.items.some((p) => p.id === producto.id);
  if (!yaEsta) {
    carrito.items.push(producto);
  }
}

export function quitar(id: number) {
  carrito.items = carrito.items.filter((p) => p.id !== id);
}
