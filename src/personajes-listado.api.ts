import Axios from "axios";
import {
  Personaje,
  // urlHostPersonajes,
  // urlHostSearch,
} from "./personajes-listado.model";

// export const obtenerPersonajes = async (): Promise<Personaje[]> => {
//   try {
//     const { data } = await Axios.get(`${urlHostPersonajes}`);
//     return data;
//   } catch (error) {
//     throw new Error("Error al obtener los personajes");
//   }
// };

export const obtenerPersonajes = async (url: string): Promise<Personaje[]> => {
  try {
    const { data } = await Axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};

// export const obtenerPersonajesFiltrados = async (
//   texto: string
// ): Promise<Personaje[]> => {
//   try {
//     const { data } = await Axios.get(`${urlHostSearch}${texto}`);
//     return data;
//   } catch (error) {
//     throw new Error("Error al obtener los personajes filtrados");
//   }
// };
