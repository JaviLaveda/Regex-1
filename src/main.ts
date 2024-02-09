import { obtenerPersonajes } from "./personajes-listado.api";
import { urlHost, Personaje } from "./personajes-listado.model";

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

const pintarPersonajes = async (): Promise<void> => {
  const personajes = await obtenerPersonajes();
  const listado = document.querySelector("#listado-personajes");
  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenedorPersonaje(personaje);
      listado.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};

const obtenerTerminoBusqueda = (): string => {
  const searchInput = document.getElementById(
    "busquedaInput"
  ) as HTMLInputElement;
  return searchInput.value.toLowerCase().trim();
};

const pintarPersonajesFiltrados = async (): Promise<void> => {
  const personajes = await obtenerPersonajes();
  const terminoBusqueda = obtenerTerminoBusqueda();
  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(terminoBusqueda)
  );
  const listado = document.querySelector("#listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    if (personajesFiltrados.length === 0) {
      listado.innerHTML = "<p>No se encontraron personajes.</p>";
    } else {
      listado.innerHTML = "";
      personajesFiltrados.forEach((personaje) => {
        const contenedorPersonaje = crearContenedorPersonaje(personaje);
        listado.appendChild(contenedorPersonaje);
      });
    }
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};

const events = () => {
  const btnFiltrar = document.getElementById("filtrarPersonaje");
  if (btnFiltrar && btnFiltrar instanceof HTMLButtonElement) {
    btnFiltrar.addEventListener("click", pintarPersonajesFiltrados);
  } else {
    throw new Error("ButtonElement not found");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  pintarPersonajes();
  events();
});
