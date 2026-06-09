// ============================================================
// datos.ts — fetch + async/await (HITO 3)
// ============================================================

import type { Cliente, Producto, EstadoCarga } from "./types";
import { esCliente, esProducto } from "./validadores";

// HITO 3 · GUIADO: la guía te lleva paso a paso (fetch → json → validar → estado).
export async function cargarClientes(): Promise<EstadoCarga<Cliente[]>> {
  // TODO (HITO 3): fetch("/clientes.json"), validar con esCliente, devolver estado.
  return { estado: "error", mensaje: "cargarClientes() sin implementar todavía" };
}

// HITO 3 · REPLICA: lo mismo que cargarClientes, pero /productos.json + esProducto.
export async function cargarProductos(): Promise<EstadoCarga<Producto[]>> {
  // TODO (HITO 3): replicar el patrón de cargarClientes
  return { estado: "error", mensaje: "cargarProductos() sin implementar todavía" };
}
