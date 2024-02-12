export const urlHostPersonajes: string = "http://localhost:3000/personajes";

export const urlHost: string = "http://localhost:3000";

export const urlHostSearch: string =
  "http://localhost:3000/personajes?nombre_like=";

export interface Personaje {
  id: string;
  nombre: string;
  apodo: string;
  especialidad: string;
  habilidades: string;
  amigo: string;
  imagen: string;
}
