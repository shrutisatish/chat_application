describe('Chat Application Login', () => {
    before(() => {
        cy.visit('/')
    })
    it('Should Show Landing Page', () => {
        cy.get('.navbar').should('be.visible')
        cy.get('[href="/about"]').should('be.visible')
        cy.get('[href="/contact"]').should('be.visible')
        cy.get(':nth-child(1) > [data-test=input]').should('exist')
        cy.get(':nth-child(2) > [data-test=input]').should('exist')
        cy.get('.deep-grey-text').should('contain', 'Log in')
        cy.get('.dark-grey-text').should('contain', 'Sign up')

    })
    it('Login with valid credentials', () => {
      cy.get(':nth-child(1) > [data-test=input]').type(Cypress.config('username'))
      cy.get(':nth-child(2) > [data-test=input]').type(Cypress.config('password'))
      cy.get('[data-test=button]').click()
      cy.url().should('contain', 'chat')
      cy.get('.app-logout').click()
    })
    it('Login with invalid credentials', () => {
      cy.get(':nth-child(1) > [data-test=input]').type(Cypress.config('invalid_username'))
      cy.get(':nth-child(2) > [data-test=input]').type(Cypress.config('invalid_password'))
      cy.get('[data-test=button]').click()
      cy.url().should('contain', '/')
      cy.get(':nth-child(1) > [data-test=input]').clear()
      cy.get(':nth-child(2) > [data-test=input]').clear()
    })
    it('Login with only email and no password shpuld fail', () => {
      cy.get(':nth-child(1) > [data-test=input]').type(Cypress.config('username'))
      cy.get('[data-test=button]').click()
      cy.url().should('contain', '/')
      cy.get(':nth-child(1) > [data-test=input]').clear()
    })
    it('Login with only password and no email should fail', () => {
      cy.get(':nth-child(2) > [data-test=input]').type(Cypress.config('password'))
      cy.get('[data-test=button]').click()
      cy.url().should('contain', '/')
    })
})
