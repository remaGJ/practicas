<script lang="ts">
  // 🟢 PROPS (se definen en clase): productos: Producto[]; onAgregar: (p) => void
</script>

<section class="panel">
  <h2>Catálogo</h2>
  <!-- 🟢 Aquí va el {#each productos as p (p.id)} con el botón Agregar -->
</section>

<style>
  .panel { background:#fff; border-radius:12px; padding:1rem 1.25rem; box-shadow:0 1px 4px rgba(0,0,0,.08); }
  h2 { color:#1E2761; margin-top:0; }
</style>
