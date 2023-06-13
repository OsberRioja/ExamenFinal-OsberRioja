describe("Obtener el monto de cambio a un cliente", () => {
  it("Muestra el cambio a devolver al cliente", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(10);
    cy.get("#monto-efectivo").type(50);
    cy.get("#cambio-button").click();
    cy.get("#resultado-div").should("contain", "40");
  });
  it("Muestra un mensaje si no se llenan ambos campos", () => {
    cy.visit("/");
    cy.get("#monto-venta").clear();
    cy.get("#monto-efectivo").clear();
    cy.get("#cambio-button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Por favor, complete ambos campos.");});
    cy.get("#resultado-div").should("contain", ""); // Verifica que el contenido del resultado-div esté vacío
  });
});

