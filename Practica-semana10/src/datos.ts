// ============================================================
// datos.ts — fetch + async/await (HITO 3)
// ============================================================

import type { Cliente, Producto, EstadoCarga } from "./types";
import { esCliente, esProducto } from "./validadores";

// HITO 3 · GUIADO: la guía te lleva paso a paso (fetch → json → validar → estado).
export async function cargarClientes(): Promise<EstadoCarga<Cliente[]>> {
  try {
    const respuesta = await fetch("/clientes.json");
    if (!respuesta.ok) {
      return { estado: "error", mensaje: `Error HTTP ${respuesta.status}` };
    }
    const datos: unknown = await respuesta.json();
    if (Array.isArray(datos) && datos.every(esCliente)) {
      return { estado: "listo", datos };
    }
    return { estado: "error", mensaje: "Formato de datos inesperado." };
  } catch (error) {
    return { estado: "error", mensaje: "No se pudo conectar con el servidor" };
  }
}

export async function cargarProductos(): Promise<EstadoCarga<Producto[]>> {
  try {
    const respuesta = await fetch("/productos.json");
    if (!respuesta.ok) {
      return { estado: "error", mensaje: `Error HTTP ${respuesta.status}` };
    }
    const datos: unknown = await respuesta.json();
    if (Array.isArray(datos) && datos.every(esProducto)) {
      return { estado: "listo", datos };
    }
    return { estado: "error", mensaje: "Formato de datos inesperado." };
  } catch (error) {
    return { estado: "error", mensaje: "No se pudo conectar con el servidor" };
  }
}
