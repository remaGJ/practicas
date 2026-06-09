// ============================================================
// eventos.ts — event delegation (HITO 1)
// UN listener en el contenedor padre; closest() encuentra el
// botón aunque el click caiga en un hijo, y funciona también
// con filas creadas después.
// ============================================================

function contenedor(selector: string): HTMLElement {
  const nodo = document.querySelector(selector);
  if (!(nodo instanceof HTMLElement)) {
    throw new Error("No se encontró el contenedor: " + selector);
  }
  return nodo;
}

// Devuelve el data-id (número) del botón que coincide con el selector,
// o null si el click no fue sobre ese botón.
function idDesde(e: Event, selectorBoton: string): number | null {
  if (!(e.target instanceof Element)) return null; // narrowing de EventTarget
  const boton = e.target.closest(selectorBoton);
  if (!boton) return null;
  return Number(boton.getAttribute("data-id"));
}

// ───────────────────────────────────────────────────────────
// EJEMPLO YA RESUELTO (úsalo como modelo para los de abajo):
// selección de cliente por delegation sobre la lista.
// ───────────────────────────────────────────────────────────
export function escucharClientes(onSeleccionar: (id: number) => void): void {
  contenedor("#lista-clientes").addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    const item = e.target.closest(".cliente");
    if (!item) return;
    onSeleccionar(Number(item.getAttribute("data-id")));
  });
}

// HITO 1 · GUIADO: un solo listener para todo el catálogo.
export function escucharCatalogo(onAgregar: (id: number) => void): void {
  // TODO (HITO 1): addEventListener("click") en "#catalogo".
  // Usa idDesde(e, ".btn-agregar"); si no es null, llama a onAgregar(id).
}

// HITO 1 · GUIADO: mismo patrón, pero el contenedor tiene 3 acciones.
export function escucharFactura(
  onMas: (id: number) => void,
  onMenos: (id: number) => void,
  onQuitar: (id: number) => void
): void {
  // TODO (HITO 1): un listener en "#lineas-factura" que distinga
  // ".btn-mas", ".btn-menos" y ".btn-quitar" con idDesde(...).
}

// YA RESUELTO: búsqueda en vivo (input) + preventDefault en el submit.
export function escucharBuscadores(
  onBuscarCliente: (texto: string) => void,
  onBuscarProducto: (texto: string) => void
): void {
  const inputCliente = document.querySelector("#buscar-cliente");
  const inputProducto = document.querySelector("#buscar-producto");
  const form = document.querySelector("#form-buscar");

  if (inputCliente instanceof HTMLInputElement) {
    inputCliente.addEventListener("input", () => onBuscarCliente(inputCliente.value));
  }
  if (inputProducto instanceof HTMLInputElement) {
    inputProducto.addEventListener("input", () => onBuscarProducto(inputProducto.value));
  }
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => e.preventDefault());
  }
}
