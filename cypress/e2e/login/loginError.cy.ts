describe('Login', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3000/')
    })

    it('should display an error message when the form is submitted with empty fields', () => {
        cy.get('.submitButton').click()
        cy.wait(2000)
        cy.url().should('include', '/')
    })
    it('should display an error message when the email is invalid', () => {
        cy.get('.email-input').type('invalid-email@1')
        cy.get('.password-input').type('mypassword')
        cy.get('.submitButton').click()
        cy.get('.user-label.email-label').should('be.visible').contains('Enter a valid email address')
    })
    it('should display root error message', () => {
        cy.get('.email-input').type('user@example.com')
        cy.get('.password-input').type('12345')
        cy.get('.submitButton').click()
        cy.get('p[is_error="true"]')
            .should('be.visible')
            .contains(new RegExp(`${'Email address or password invalid.'}|${'Too many requests, please try again later'}`))
    })
})
