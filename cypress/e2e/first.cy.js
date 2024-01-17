describe("Counter App", () => {
  it('should increment and decrement count', () => {
    cy.visit('http://localhost:3000/')
    cy.get('p').contains('Count: 0');

    cy.get('button').contains('Increment').click();
    cy.get('p').contains('Count: 1');

    cy.get('button').contains('Decrement').click();
    cy.get('p').contains('Count: 0');
  });
})
