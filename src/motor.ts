import { bancos, Iban } from "./model";

import * as ibantools from "ibantools";

export const validarIban = (iban: string): boolean => {
  return ibantools.isValidIBAN(iban);
};
export const extraerCodigoPais = (iban: string): string => {
  return iban.substring(0, 2);
};

export const extraerDigitosControl1 = (iban: string): string => {
  return iban.substring(2, 4);
};

export const extraerCodigoBanco = (iban: string): string => {
  return iban.substring(4, 8);
};

export const extraerCodigoSucursal = (iban: string): string => {
  return iban.substring(8, 12);
};

export const extraerDigitosControl2 = (iban: string): string => {
  return iban.substring(12, 14);
};

export const extraerNumeroCuenta = (iban: string): string => {
  return iban.substring(14);
};

export const obtenerNombreBanco = (codigoBanco: string): string => {
  return bancos[codigoBanco];
};

export const obtenerDetallesIban = (iban: string): Iban => {
  const pais = extraerCodigoPais(iban);
  const digito1 = extraerDigitosControl1(iban);
  const codigoBanco = extraerCodigoBanco(iban);
  const nombreBanco = obtenerNombreBanco(codigoBanco);
  const sucursal = extraerCodigoSucursal(iban);
  const digito2 = extraerDigitosControl2(iban);
  const numeroCuenta = extraerNumeroCuenta(iban);
  return {
    pais: pais,
    digito1: digito1,
    banco: nombreBanco,
    sucursal: sucursal,
    digito2: digito2,
    cuenta: numeroCuenta,
  };
};
