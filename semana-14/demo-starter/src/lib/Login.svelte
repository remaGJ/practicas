<script lang="ts">
  import { sesion, iniciarSesion, cerrarSesion } from './sesion.svelte';

  let nombre = $state('');

  function entrar() {
    if (nombre.trim() !== '') {
      iniciarSesion(nombre);
      nombre = '';
    }
  }
</script>

{#if sesion.usuario}
  <div class="login">
    <span>Hola, <strong>{sesion.usuario}</strong></span>
    <button onclick={cerrarSesion}>Cerrar sesión</button>
  </div>
{:else}
  <div class="login">
    <input placeholder="Tu nombre" bind:value={nombre} />
    <button onclick={entrar}>Iniciar sesión</button>
  </div>
{/if}

<style>
  .login {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
</style>
