<script lang="ts">
  import { goto } from '$app/navigation';
  import { agregar } from '$lib/carrito.svelte';
  import { formatearPrecio } from '$lib/calculos';

  let { data } = $props();
</script>

<section>
  <a href="/productos">← Volver a productos</a>
  <h1>{data.producto.nombre}</h1>
  <p class="precio">{formatearPrecio(data.producto.precio)}</p>
  <button onclick={() => agregar(data.producto)}>Agregar al carrito</button>
</section>

<style>
  .precio { font-size: 1.4rem; color: #028090; font-weight: 700; }
</style>
