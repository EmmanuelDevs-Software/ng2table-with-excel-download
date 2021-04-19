/// <reference types="Cypress"/>

describe('My Firest Test Suite', () => {
  it('test url works', () => {
    cy.visit('http://localhost:4200');
  });

  it('test download Excel', () => {
    cy.get('[data-cy="download-excel"]').click();
  });
});
