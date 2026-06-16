// ============================================================
// types.ts — los "moldes" de datos. REUTILIZADO del Facturador,
// sin un solo cambio. Eso es parte del mensaje: los tipos
// transfieren a cualquier framework.
// ============================================================

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

// Una línea del carrito: un producto y cuántas unidades.
export interface LineaFactura {
  producto: Producto;
  cantidad: number;
}

// Los tres números del pie del carrito.
export interface Totales {
  subtotal: number;
  iva: number;
  total: number;
}
