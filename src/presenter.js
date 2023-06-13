import Cambio from "./Cambio";

const venta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#monto-efectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const montoVenta = Number.parseInt(venta.value);
  const montoEfectivo = Number.parseInt(efectivo.value);

  if (isNaN(montoVenta) || isNaN(montoEfectivo)) {
    alert("Por favor, complete ambos campos.");
    return; // Detener la ejecución si hay campos vacíos
  }

  const cambio = Cambio(montoVenta, montoEfectivo);

  div.innerHTML = "<p>" + cambio + "</p>";


});
