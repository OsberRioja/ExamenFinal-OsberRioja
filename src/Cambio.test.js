import Fraccionar from "./Cambio.js";

describe("Fraccionar en monedas", () => {
  it("deberia fraccionar solo en monedas de 1 bs", () => {
    expect(Fraccionar(1)).toEqual([1]);
  });
  it("deberia fraccionar solo en monedas de 1 y 2", () => {
    expect(Fraccionar(3)).toEqual([2,1]);
  });

  it("deberia fraccionar en monedas de 1,2 y 5 bs", () => {
    expect(Fraccionar(13)).toEqual([5,5,2,1]);
  });
  it("deberia fraccionar en monedas de 0.2,0.5,1,2,5 bs", () => {
    expect(Fraccionar(19)).toEqual([5,5,5,2,2]);
  });
});
