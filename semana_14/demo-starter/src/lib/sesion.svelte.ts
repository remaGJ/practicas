export const sesion = $state({
  usuario: null as string | null,
});

export function iniciarSesion(nombre: string) {
  sesion.usuario = nombre;
}

export function cerrarSesion() {
  sesion.usuario = null;
}
