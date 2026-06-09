// ============================================================
// validadores.ts — type predicates (HITO 3)
// ============================================================

import type { Cliente, Producto } from "./types";

// HITO 3 · GUIADO: la guía te lleva paso a paso a completar este predicado.
export function esCliente(x: unknown): x is Cliente {
  // TODO (HITO 3): validar id(number), nombre(string), ruc(string), email(string)
  return false; // ← reemplazar
}

// HITO 3 · REPLICA: haz exactamente lo mismo que esCliente,
// pero con los campos de Producto (id, nombre, precio, categoria).
export function esProducto(x: unknown): x is Producto {
  // TODO (HITO 3): replicar el patrón de esCliente
  return false; // ← reemplazar
}
