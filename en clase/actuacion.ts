
// 1. Definición de la interfaz
interface IPelicula {
  nombre: string;
  categoria: string;
  tiempo: number;
}

// 2. Definición del arreglo de películas (con los datos de la pizarra)
const peliculas: IPelicula[] = [
  { nombre: "IT", categoria: "terror", tiempo: 60 },
  { nombre: "Rings", categoria: "terror", tiempo: 180 },
  { nombre: "Posesion", categoria: "terror", tiempo: 130 }
];

const Obtener_pelicula_terror =(parametro: IPelicula) => parametro.categoria === "terror";

// Corrección del filtro: te faltaba un paréntesis al abrir el arrow function

const pelicula_de_terror = peliculas.filter((parametro: IPelicula) => parametro.categoria === "terror");


// Quiero ver en que tiempo se demora en ver las 3 peliculas de terror

const totalminutos = peliculas.reduce((acumulador, p) => acumulador + p.tiempo, 0); 

console.log(`El tiempo total para ver las 3 películas de terror es: ${totalminutos} minutos.`);


// 1. Definimos una constante con un arreglo de nombres de tipo string 

const nombre: string[] = [
  "pablo",
  "maria",
  "juan"
]

// creamos una función que reciba un arreglo de tipo string y retorne el primer elemento del arreglo
function Obtener_parrametro_Elemento(parametro: string)
{  return parametro[0]
} 

// ahora lo mismo pero para la pelicula es decir obtener la primera pelicula 

function Obtener_parrametro_Pelicula(primer_pelicula: IPelicula[])
{  return primer_pelicula[0]
}

// ahora como hacer para que las dos funciones sea una sola la funcion de obtenr parametro elemento y la de obtener parametro pelicula

function Obtener_primer_Elemento<T>(parametro: T[]): T {const pp = Obtener_primer_Elemento<string>(nombre);


// definir una funcion que se llame cargar 

function cargar(){
   const respuesta = fetch("/peliculas.json") 
   const datos = respuesta.json()
 
}
}

async function cargar(){
    const respuesta = await fetch("/peliculas.json")
    const datos = await respuesta.json()
    console.log(datos)
}


type EstadoDeCarga<T> = 
  | { estado: "cargando" }
  | { estado: "error"; mensaje: string }
  | { estado: "completado"; datos: T };

function describir_estado_de_carga(estado: EstadoDeCarga<IPelicula[]>) {
  // El switch nos permite ramificar la lógica según la "etiqueta"
  switch (estado.estado) {
    case "cargando":
      console.log("Por favor espera, estamos obteniendo las películas...");
      break;

    case "error":
      console.log("Ups, algo salió mal:", estado.mensaje);
      break;

    case "completado":
      console.log(`¡Éxito! Se cargaron ${estado.datos.length} películas.`);
      // TypeScript es tan inteligente que aquí "estado.datos" ya está disponible
      break;
  }
}