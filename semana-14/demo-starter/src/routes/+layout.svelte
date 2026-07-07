<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import Login from '$lib/Login.svelte';
  import { carrito } from '$lib/carrito.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header>
  <nav>
    <a href="/">Inicio</a>
    <a href="/productos">Productos</a>
    <a href="/contacto">Contacto</a>
    <a href="/carrito" class="carrito-link">Carrito ({carrito.items.length})</a>
  </nav>
  <Login />
</header>

<main>
  {@render children()}
</main>

<footer>
  <p>Mini Tienda — IS-403 ULEAM</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #1E2761;
    color: white;
  }
  nav {
    display: flex;
    gap: 1.25rem;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  nav a:hover {
    text-decoration: underline;
  }
  .carrito-link {
    color: #F96167;
    font-weight: 700;
  }
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }
  footer {
    text-align: center;
    padding: 1rem;
    color: #666;
    border-top: 1px solid #eee;
  }
</style>
