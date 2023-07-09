describe('Register Success', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3000/')
    })

    it('register teste', () => {
        cy.get('button[name="register-button"]').click();
        cy.get('input[name="email"]').type('user@example.com')
        cy.get('input[name="password"]').type('mypassword')
        cy.get('input[name="cf_password"]').type('mypassword')
        cy.get('input[name="terms"]').check()
        cy.get('.submitButton').click()
        cy.url().should('include', '/dashboard')
    })
})
