import ContarPalabras from "./contador.js";

describe("Dada una frase contar la cantidad de ocurrencias de las palabras", () => {
  it("deberia devolver 0 si el texto esta vacio", () => {
    expect(ContarPalabras("")).toEqual(0);
  });
});
