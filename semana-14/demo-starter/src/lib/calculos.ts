import type { Producto } from './types';

export function calcularSubtotal(items: Producto[]): number {
  return items.reduce((suma, p) => suma + p.precio, 0);
}

export function calcularIVA(subtotal: number): number {
  return subtotal * 0.15;
}

export function calcularTotal(items: Producto[]): number {
  const subtotal = calcularSubtotal(items);
  return subtotal + calcularIVA(subtotal);
}

export function formatearPrecio(valor: number): string {
  return `$${valor.toFixed(2)}`;
}
