describe('Register Success', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3000/')
        cy.get('button[name="register-button"]').click();
    })

    it('should display an error message when the form is submitted with empty fields', () => {
        cy.get('.submitButton').click()
        cy.wait(2000)
        cy.url().should('include', '/')
    })

    it('should display an error message when the a field is invalid', () => {
        cy.get('input[name="email"]').type('user@e1')
        cy.get('input[name="password"]').type('pass')
        cy.get('input[name="cf_password"]').type('mypass')
        cy.get('.submitButton').click()
        cy.get('.user-label.email-label').should('be.visible').contains('Invalid email address')
        cy.get('.user-label.password-label').should('be.visible').contains('Min 6 characters')
    })
})
