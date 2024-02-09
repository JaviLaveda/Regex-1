import Axios from "axios";
import { Personaje, urlHost } from "./personajes-listado.model";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await Axios.get(`${urlHost}/personajes`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};
