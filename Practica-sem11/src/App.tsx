import "./App.css";
import { useState, useEffect, useMemo } from "react";
import type { Producto, LineaFactura } from "./lib/types";
import { agregarProducto, calcularTotales } from "./lib/calculos";

export default function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [lineas, setLineas] = useState<LineaFactura[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch("/productos.json");
        const data: Producto[] = await respuesta.json();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  const manejarAgregar = (producto: Producto) => {
    setLineas((prev) => agregarProducto(prev, producto));
  };

  useEffect(() => {
    console.log("lineas:", lineas);
  }, [lineas]);

  const totales = useMemo(() => calcularTotales(lineas), [lineas]);

  return (
    <main>
      <h1>🧾 Mini Facturador — React</h1>
      <p>Punto de partida. Reutiliza src/lib/types.ts y src/lib/calculos.ts.</p>
      <p>Productos cargados: {productos.length}</p>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <section>
          <h2>Catálogo</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} — ${producto.precio.toFixed(2)}
                <button type="button" onClick={() => manejarAgregar(producto)}>
                  Agregar
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2>Carrito</h2>
        {lineas.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul>
            {lineas.map((linea) => (
              <li key={linea.producto.id}>
                {linea.producto.nombre} x {linea.cantidad} = ${(
                  linea.producto.precio * linea.cantidad
                ).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Totales</h2>
        <p>Subtotal: ${totales.subtotal.toFixed(2)}</p>
        <p>IVA: ${totales.iva.toFixed(2)}</p>
        <p>Total: ${totales.total.toFixed(2)}</p>
      </section>
    </main>
  );
}
