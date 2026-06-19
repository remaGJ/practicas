// types.ts — REUTILIZADO del Facturador / del demo de Svelte, SIN CAMBIOS.
// Es TypeScript puro: sirve igual en React, Vue y Angular.
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}
export interface LineaFactura {
  producto: Producto;
  cantidad: number;
}
export interface Totales {
  subtotal: number;
  iva: number;
  total: number;
}
