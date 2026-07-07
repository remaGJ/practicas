<script lang="ts">
  import { goto } from '$app/navigation';
  import { carrito, quitar } from '$lib/carrito.svelte';
  import { calcularTotal, formatearPrecio } from '$lib/calculos';

  const total = $derived(calcularTotal(carrito.items));
</script>

<section>
  <h1>Carrito</h1>
  {#if carrito.items.length === 0}
    <p>Tu carrito está vacío.</p>
    <button onclick={() => goto('/productos')}>Seguir comprando</button>
  {:else}
    <ul>
      {#each carrito.items as item (item.id)}
        <li>
          <span>{item.nombre} — {formatearPrecio(item.precio)}</span>
          <button onclick={() => quitar(item.id)}>Quitar</button>
        </li>
      {/each}
    </ul>
    <p class="total"><strong>Total: {formatearPrecio(total)}</strong></p>
    <button onclick={() => goto('/productos')}>Seguir comprando</button>
  {/if}
</section>

<style>
  ul { list-style: none; padding: 0; }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
  }
  .total { margin-top: 1rem; font-size: 1.2rem; }
</style>
