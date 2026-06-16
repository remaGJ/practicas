// ============================================================
// calculos.ts — funciones PURAS. REUTILIZADO del Facturador.
// No tocan el DOM ni mutan sus entradas. Svelte solo las llama.
// ============================================================

import type { Producto, LineaFactura, Totales } from "./types";

const IVA = 0.15; // Tarifa general del IVA en Ecuador (2026)

// find + map (inmutable): si el producto ya está, suma 1; si no, lo agrega.
export function agregarProducto(lineas: LineaFactura[], producto: Producto): LineaFactura[] {
  const existente = lineas.find((l) => l.producto.id === producto.id);
  if (existente) {
    return lineas.map((l) =>
      l.producto.id === producto.id ? { ...l, cantidad: l.cantidad + 1 } : l
    );
  }
  return [...lineas, { producto, cantidad: 1 }];
}

// reduce: recorre las líneas una vez y acumula el subtotal.
export function calcularTotales(lineas: LineaFactura[]): Totales {
  const subtotal = lineas.reduce(
    (acc, linea) => acc + linea.producto.precio * linea.cantidad,
    0
  );
  const iva = subtotal * IVA;
  const total = subtotal + iva;
  return { subtotal, iva, total };
}
