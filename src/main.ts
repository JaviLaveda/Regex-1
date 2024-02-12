import {
  obtenerPersonajes,
  // obtenerPersonajesFiltrados,
} from "./personajes-listado.api";
import {
  urlHost,
  urlHostPersonajes,
  urlHostSearch,
  Personaje,
} from "./personajes-listado.model";

const crearElementoImagen = (nombre: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = `${urlHost}/${nombre}`;
  return imagen;
};

const crearElementoParrafo = (
  campo: string,
  texto: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = campo + texto;
  return parrafo;
};
const crearContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje-contenedor");

  const imagen = crearElementoImagen(personaje.imagen);
  elementoPersonaje.appendChild(imagen);

  const nombre = crearElementoParrafo("Nombre: ", personaje.nombre);
  elementoPersonaje.appendChild(nombre);

  const apodo = crearElementoParrafo("Apodo: ", personaje.apodo);
  elementoPersonaje.appendChild(apodo);

  const especialidad = crearElementoParrafo(
    "Especialidad: ",
    personaje.especialidad
  );
  elementoPersonaje.appendChild(especialidad);

  const habilidades = crearElementoParrafo(
    "Habilidades: ",
    personaje.habilidades
  );
  elementoPersonaje.appendChild(habilidades);

  const amigo = crearElementoParrafo("Amigo: ", personaje.amigo);
  elementoPersonaje.appendChild(amigo);

  return elementoPersonaje;
};

const crearContenedoresPersonajes = (
  listado: HTMLDivElement,
  personajes: Personaje[]
) => {
  personajes.forEach((personaje) => {
    const contenedorPersonaje = crearContenedorPersonaje(personaje);
    listado.appendChild(contenedorPersonaje);
  });
};

const obtenerTerminoBusqueda = (): string => {
  const searchInput = document.getElementById("busquedaInput");
  if (searchInput && searchInput instanceof HTMLInputElement) {
    return searchInput.value.toLowerCase().trim();
  } else {
    throw new Error("No se ha encontrado el input");
  }
};

const mensajeErrorListadoPersonajes = (listado: HTMLDivElement) => {
  listado.innerHTML = "<p>No se encontraron personajes.</p>";
};

const vaciarListadoPersonajes = (listado: HTMLDivElement) => {
  listado.innerHTML = "";
};

const creaListadoPersonajes = (personajes: Personaje[]) => {
  const listado = document.querySelector("#listado-personajes");
  if (listado && listado instanceof HTMLDivElement) {
    crearContenedoresPersonajes(listado, personajes);
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};

const creaListadoPersonajesFiltrados = (personajes: Personaje[]) => {
  const listado = document.querySelector("#listado-personajes");
  if (personajes.length === 0 && listado && listado instanceof HTMLDivElement) {
    mensajeErrorListadoPersonajes(listado);
  } else if (listado && listado instanceof HTMLDivElement) {
    vaciarListadoPersonajes(listado);
    crearContenedoresPersonajes(listado, personajes);
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};

const mostrarPersonajes = async (): Promise<void> => {
  const personajes = await obtenerPersonajes(urlHostPersonajes);

  creaListadoPersonajes(personajes);
};

const mostrarPersonajesFiltrados = async (event: Event): Promise<void> => {
  event.preventDefault();

  const terminoBusqueda = obtenerTerminoBusqueda();
  const personajesFiltrados = await obtenerPersonajes(
    `${urlHostSearch}${terminoBusqueda}`
  );

  creaListadoPersonajesFiltrados(personajesFiltrados);
};

const events = () => {
  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", mostrarPersonajesFiltrados);
  } else {
    throw new Error("FormElement not found");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  mostrarPersonajes();
  events();
});
