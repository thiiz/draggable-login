describe('Login Success', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('http://localhost:3000/')
  })
  it('should fill in the form and submit the data', () => {
    cy.get('.email-input').type('user@example.com')
    cy.get('.password-input').type('mypassword')
    cy.get('.submitButton').click()
    cy.url().should('include', '/dashboard')
  })
})