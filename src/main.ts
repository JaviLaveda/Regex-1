import { validarIban, obtenerDetallesIban } from "./motor";

import { Iban } from "./model";

const obtenerTerminoBusqueda = (): string => {
  const searchInput = document.getElementById("busquedaInput");
  if (searchInput && searchInput instanceof HTMLInputElement) {
    return searchInput.value.toLowerCase().trim();
  } else {
    throw new Error("No se ha encontrado el input");
  }
};

const crearElementoParrafo = (
  campo: string,
  texto: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = campo + texto;
  return parrafo;
};

const crearContenedorIban = (iban: Iban): HTMLDivElement => {
  const contenedorIban = document.getElementById("detallesIban");

  if (contenedorIban && contenedorIban instanceof HTMLDivElement) {
    vaciarListadoIban(contenedorIban);
    const pais = crearElementoParrafo("Código de país: ", iban.pais);
    contenedorIban.appendChild(pais);
    const digito1 = crearElementoParrafo(
      "Dígitos de control (1): ",
      iban.digito1
    );
    contenedorIban.appendChild(digito1);
    const banco = crearElementoParrafo("Banco: ", iban.banco);
    contenedorIban.appendChild(banco);

    const sucursal = crearElementoParrafo("Sucursal: ", iban.sucursal);
    contenedorIban.appendChild(sucursal);

    const digito2 = crearElementoParrafo(
      "Digitos de control (2): ",
      iban.digito2
    );
    contenedorIban.appendChild(digito2);

    const cuenta = crearElementoParrafo("Número de cuenta: ", iban.cuenta);
    contenedorIban.appendChild(cuenta);

    return contenedorIban;
  } else {
    throw new Error("No se ha encontrado el div");
  }
};

const vaciarListadoIban = (listado: HTMLDivElement) => {
  listado.innerHTML = "";
};

const ibanFormatoRegex =
  /^([A-Za-z]{2})[\s-]?(\d{2})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?(\d{2})[\s-]?(\d{10})$/;

const formatoIbanRegexTest = (iban: string): boolean => {
  return ibanFormatoRegex.test(iban);
};

const mensajeFormatoIbanError = () => {
  const divFormato = document.querySelector("#formatoIban");
  if (divFormato && divFormato instanceof HTMLDivElement) {
    divFormato.innerHTML =
      "<p>El formato del IBAN no es correcto, inténtalo de nuevo.</p>";
  }
};

const mensajeFormatoIbanCorrecto = () => {
  const divFormato = document.querySelector("#formatoIban");
  if (divFormato && divFormato instanceof HTMLDivElement) {
    divFormato.innerHTML = "<p>El formato del IBAN es correcto.</p>";
  }
};

const mostrarFormatoIban = (iban: string) => {
  const ibanFormatoCorrecto: boolean = formatoIbanRegexTest(iban);

  if (ibanFormatoCorrecto !== null && ibanFormatoCorrecto !== undefined) {
    if (ibanFormatoCorrecto) {
      mensajeFormatoIbanCorrecto();
    } else {
      mensajeFormatoIbanError();
    }
  } else {
    throw new Error("No se ha encontrado el IBAN");
  }
};

const mensajeIbanValido = () => {
  const divFormato = document.querySelector("#validaIban");
  if (divFormato && divFormato instanceof HTMLDivElement) {
    divFormato.innerHTML = "<p>El IBAN es válido.</p>";
  }
};

const mensajeIbanNoValido = () => {
  const divFormato = document.querySelector("#validaIban");
  if (divFormato && divFormato instanceof HTMLDivElement) {
    divFormato.innerHTML = "<p>El IBAN no es válido, revisa tus datos.</p>";
  }
};

const comprobarValidezIban = (iban: string) => {
  const ibanValido: boolean = validarIban(iban);
  console.log("Resultado de isValidIBAN:", ibanValido);
  if (ibanValido !== null && ibanValido !== undefined) {
    if (ibanValido) {
      mensajeIbanValido();
    } else {
      mensajeIbanNoValido();
    }
  } else {
    throw new Error("No se ha encontrado el IBAN");
  }
};

const mostrarResultadoIban = (event: Event) => {
  event.preventDefault();

  const ibanBusqueda = obtenerTerminoBusqueda();

  mostrarFormatoIban(ibanBusqueda);

  comprobarValidezIban(ibanBusqueda);

  const ibanDetallado: Iban = obtenerDetallesIban(ibanBusqueda);
  crearContenedorIban(ibanDetallado);
};

const events = () => {
  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", mostrarResultadoIban);
  } else {
    throw new Error("FormElement not found");
  }
};

document.addEventListener("DOMContentLoaded", events);
