// calculos.ts — REUTILIZADO sin cambios. Funciones puras, sin DOM, inmutables.
import type { Producto, LineaFactura, Totales } from "./types";
const IVA = 0.15; // IVA Ecuador 2026
export function agregarProducto(lineas: LineaFactura[], producto: Producto): LineaFactura[] {
  const existente = lineas.find((l) => l.producto.id === producto.id);
  if (existente) {
    return lineas.map((l) =>
      l.producto.id === producto.id ? { ...l, cantidad: l.cantidad + 1 } : l
    );
  }
  return [...lineas, { producto, cantidad: 1 }];
}
export function calcularTotales(lineas: LineaFactura[]): Totales {
  const subtotal = lineas.reduce((acc, l) => acc + l.producto.precio * l.cantidad, 0);
  const iva = subtotal * IVA;
  return { subtotal, iva, total: subtotal + iva };
}
