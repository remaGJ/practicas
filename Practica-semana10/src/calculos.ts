// ============================================================
// calculos.ts — métodos funcionales (HITO 2)
// Ninguna de estas funciones toca el DOM ni muta sus entradas.
// ============================================================

import type { Cliente, Producto, LineaFactura, Totales } from "./types";

const IVA = 0.15; // Tarifa general del IVA en Ecuador (2026)

// HITO 2 · GUIADO: filter sobre clientes (por nombre o RUC).
export function buscarClientes(clientes: Cliente[], texto: string): Cliente[] {
  // TODO (HITO 2): si el texto está vacío devolver todos; si no, filtrar.
  return clientes; // ← reemplazar
}

// HITO 2 · REPLICA: lo mismo que buscarClientes, pero por nombre de producto.
export function buscarProductos(productos: Producto[], texto: string): Producto[] {
  // TODO (HITO 2): replicar el patrón de buscarClientes
  return productos; // ← reemplazar
}

// HITO 2 · GUIADO: find + map. ¿Ya está el producto? +1; si no, agregarlo.
export function agregarProducto(lineas: LineaFactura[], producto: Producto): LineaFactura[] {
  // TODO (HITO 2): usar find para ver si existe; map (inmutable) para +1.
  return lineas; // ← reemplazar
}

// HITO 2 · GUIADO: reduce. Subtotal en una pasada; de ahí IVA y total.
export function calcularTotales(lineas: LineaFactura[]): Totales {
  // TODO (HITO 2): reduce para el subtotal; luego iva = subtotal * IVA.
  return { subtotal: 0, iva: 0, total: 0 }; // ← reemplazar
}
