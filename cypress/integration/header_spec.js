describe('Chat Application Header', () => {
    before(() => {
        cy.visit('/')
    })
    it('Test about link in header', () => {
        cy.get('[href="/about"]').should('be.visible')
        cy.get('[href="/about"]').click()
        cy.url().should('contain', '/about')
        cy.get('.about').should('be.visible')
        cy.get('.about > :nth-child(1)').should('be.visible')
        cy.get('.about > :nth-child(2)').should('be.visible')
        cy.get('.about > :nth-child(3)').should('be.visible')
        cy.get('.about > :nth-child(4)').should('be.visible')
        cy.get('.about > :nth-child(5)').should('be.visible')
        cy.get('.about > :nth-child(6)').should('be.visible')
        cy.get('.about > :nth-child(7)').should('be.visible')
        cy.get('.about > :nth-child(8)').should('be.visible')
        cy.get('.about > :nth-child(9)').should('be.visible')
        cy.get('.about > :nth-child(10)').should('be.visible')
        cy.get('.about > :nth-child(11)').should('be.visible')
        cy.get('.about > :nth-child(12)').should('be.visible')
        cy.get('.about > :nth-child(13)').should('be.visible')
        cy.get('.about > :nth-child(14)').should('be.visible')
        cy.get('.about > :nth-child(15)').should('be.visible')
        cy.get('.about > :nth-child(16)').should('be.visible')
        cy.get('.about > :nth-child(17)').should('be.visible')
        cy.get('.about > :nth-child(18)').should('be.visible')
        cy.get('.about > :nth-child(19)').should('be.visible')
        cy.get('.about > :nth-child(20)').should('be.visible')
    })

    it('Test contact link in header', () => {
        cy.get('[href="/contact"]').should('be.visible')
        cy.get('[href="/contact"]').click()
        cy.url().should('contain', '/contact')
        cy.get('img').should('be.visible')
        cy.get('.card_front > .container').should('be.visible')
        cy.get('.card_front > .container > :nth-child(1)').should('contain','Shruti Satish')
        cy.get('.card_front > .container > :nth-child(2)').should('contain','Software Engineer')
        cy.get('.card_front > .container > :nth-child(3)').should('contain',' shrutisatish36@gmail.com | 415-226-9444 | San Francisco | 94117 ')
        cy.get('img').should('be.visible').click()
        cy.get('.card_back > .container').should('be.visible')
        cy.get('h3').should('be.visible')
        cy.get('.card_back > .container > :nth-child(2)').should('be.visible')
        cy.get('h2').should('be.visible')
        cy.get('.container > :nth-child(5)').should('be.visible')
    })
})
