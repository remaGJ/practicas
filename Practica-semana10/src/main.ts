// ============================================================
// main.ts — orquesta todo: estado, eventos y re-render.
// (Ya viene completo. Tú completas los módulos que usa.)
// ============================================================

import type { Cliente, Producto, LineaFactura } from "./types";
import { cargarClientes, cargarProductos } from "./datos";
import {
  buscarClientes,
  buscarProductos,
  agregarProducto,
  calcularTotales,
} from "./calculos";
import {
  renderClientes,
  renderCatalogo,
  renderFactura,
  renderTotales,
  renderClienteSeleccionado,
  mostrarMensaje,
} from "./dom";
import {
  escucharCatalogo,
  escucharFactura,
  escucharClientes,
  escucharBuscadores,
} from "./eventos";

// ---- Estado de la app ----
let clientes: Cliente[] = [];
let productos: Producto[] = [];
let lineas: LineaFactura[] = [];
let clienteSeleccionado: Cliente | null = null;

// ---- Datos QUEMADOS para Hito 1 y 2 (en Hito 3 vienen del servidor) ----
const CLIENTES_DEMO: Cliente[] = [
  { id: 1, nombre: "María Vélez Loor", ruc: "1312345678001", email: "maria@correo.com" },
  { id: 2, nombre: "Carlos Zambrano Mero", ruc: "1311223344001", email: "carlos@correo.com" },
  { id: 3, nombre: "Tienda La Manabita", ruc: "1391122334001", email: "tienda@correo.com" },
];
const PRODUCTOS_DEMO: Producto[] = [
  { id: 101, nombre: "Arroz 2 kg", precio: 2.5, categoria: "Alimentos" },
  { id: 104, nombre: "Detergente 1 kg", precio: 4.75, categoria: "Limpieza" },
  { id: 108, nombre: "Audífonos básicos", precio: 8.99, categoria: "Electrónica" },
  { id: 110, nombre: "Foco LED 9W", precio: 2.25, categoria: "Hogar" },
];

// ---- Render derivado del estado ----
function renderFacturaCompleta(): void {
  renderFactura(lineas);
  renderTotales(calcularTotales(lineas));
}

// ---- Acciones ----
function agregar(id: number): void {
  const p = productos.find((x) => x.id === id);
  if (!p) return;
  lineas = agregarProducto(lineas, p);
  renderFacturaCompleta();
}

function mas(id: number): void {
  lineas = lineas.map((l) =>
    l.producto.id === id ? { ...l, cantidad: l.cantidad + 1 } : l
  );
  renderFacturaCompleta();
}

function menos(id: number): void {
  lineas = lineas
    .map((l) => (l.producto.id === id ? { ...l, cantidad: l.cantidad - 1 } : l))
    .filter((l) => l.cantidad > 0);
  renderFacturaCompleta();
}

function quitar(id: number): void {
  lineas = lineas.filter((l) => l.producto.id !== id);
  renderFacturaCompleta();
}

function seleccionarCliente(id: number): void {
  clienteSeleccionado = clientes.find((c) => c.id === id) ?? null;
  renderClienteSeleccionado(clienteSeleccionado);
}

// ---- Arranque ----
async function iniciar(): Promise<void> {
  // HITO 1 y 2: datos quemados.
  // HITO 3: reemplaza estas 2 líneas por cargarClientes()/cargarProductos().
  productos = PRODUCTOS_DEMO;
  mostrarMensaje("Cargando datos…");
  const respClientes = await cargarClientes();
  if (respClientes.estado !== "listo") {
  return mostrarMensaje(
  respClientes.estado === "error" ? "Error: " + respClientes.mensaje : "Cargando…"
);
}
  
  // Pintado inicial
  renderClientes(clientes);
  renderCatalogo(productos);
  renderFacturaCompleta();
  renderClienteSeleccionado(null);

  // ── Hito 1: verificación visual ──
  // Conectamos los eventos a mensajes en pantalla para COMPROBAR que la
  // delegación captura el botón correcto. En el Hito 2 reemplazas estas
  // funciones de prueba por la lógica real (agregar, mas, menos, quitar).
  escucharCatalogo((id) => {
    const p = productos.find((x) => x.id === id);
    mostrarMensaje(
      p ? "Agregar → " + p.nombre + " (id " + p.id + ")" : "Agregar → id " + id + " (no está en el catálogo)"
    );
  });
  escucharFactura(
    (id) => mostrarMensaje("Subir cantidad → id " + id),
    (id) => mostrarMensaje("Bajar cantidad → id " + id),
    (id) => mostrarMensaje("Quitar → id " + id)
  );
  escucharClientes(seleccionarCliente);
  escucharBuscadores(
    (texto) => renderClientes(buscarClientes(clientes, texto)),
    (texto) => renderCatalogo(buscarProductos(productos, texto))
  );

  // Estas funciones se conectan en el Hito 2; los datos del servidor, en el Hito 3.
  void agregar; void mas; void menos; void quitar;
  void cargarClientes; void cargarProductos;
}

void iniciar();
