describe('Carrer page and Job Application Form', () => {
  
  before(() => {
    cy.visit('https://www.init.pt/en/career-init-dcp')
  })

  it('Visit job application form and fill it', () => {
    cy.scrollTo(0, 1000)
    cy.wait(1000)

    cy.get('.init-tile--dark > .init-tile__visible-content > .init-heading > span')
      .should('be.visible')

    cy.get('[href="/en/ajax/form/speculative-application"]')
      .first()
      .click();

    // Prevent to select any items outside the form

    cy.get('form').within(() => { 
      cy.get('label:contains("Development")')
        .click();

      cy.wait(300)

      cy.get('label:contains("Porto")')
        .click();

      cy.wait(300)

      cy.get('label:contains("Mr.")')
        .click();

      cy.wait(300)

      cy.get('[name="first_name"]')
        .type('Gabriel')
      
      cy.get('[name="last_name"]')
        .type('Mathias')

      cy.wait(300)
    
      cy.get('[name="email"]')
        .type('gablemathias@icloud.com')

      cy.get('[name="phone_number"]')
        .type('932 733 094')
      
      cy.wait(300)

      cy.get('label:contains("Upload documents (max. 4 PDF with max. 5 MB each)")')
        .selectFile('cypress/fixtures/cv.pdf')

      cy.get('[name="salary"]')
        .type('15600')
      
      cy.get('[name="start_date"]')
        .type('01/11/2024')

      cy.get('[name="message"]')
        .type('I am really excited to be part of the team and contribute with my knowledge\nThanks!')
      
      cy.wait(2000);

      cy.get('[name="data_protection"]')
        .check();
      
      cy.get('[name="second_optin"]')
        .check();
        
      cy.pause();

      // Wait before clicking on Cancel Button
      cy.get('#ajax-form-cancel').click();
    });
  })
})