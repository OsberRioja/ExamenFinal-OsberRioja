import ContarPalabras from "./contador.js";

describe("Dada una frase contar la cantidad de ocurrencias de las palabras", () => {
  it("deberia devolver 0 si el texto esta vacio", () => {
    expect(ContarPalabras("")).toEqual(0);
  });
  it("si el texto tiene solo una palabra debe devolver 1", () => {
    expect(ContarPalabras("hola")).toEqual(1);
  });
  it("deberia devolver la cantidad de veces que se repite una palabra eb un texto", () => {
    expect(ContarPalabras("hola a todos hola a ti","hola")).toEqual(2);
  });
});
