import { error } from '@sveltejs/kit';
import { productos } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const id = Number(params.id);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    error(404, 'Producto no encontrado');
  }

  return { producto };
};
