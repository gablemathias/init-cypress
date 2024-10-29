describe(']init[ Website', () => {
  it('Access the frontpage and Carrer page', () => {
    cy.visit('https://www.init.pt/en')
    cy.get('[href="/en/career-init-dcp"]')
      .should('be.visible')

    cy.get('[href="/en/career-init-dcp"]')
      .first() // 3 elements with the same link, first one to proper access
      .click();
  })
})