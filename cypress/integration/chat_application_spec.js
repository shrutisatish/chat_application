describe('Chat Application Testing', () => {
    before(() => {
        cy.visit('/')
        cy.login()
    })

    it('Test to check that the message field is disabled when no room is selected', () => {
      cy.get('.send-message-form').should('not.be.focused')
      cy.get('.join-room').should('contain', '← Join a Room!')
      cy.get('.toggle-paperclip > svg').should('not.be.focused')
      cy.get('.toggle-toggleEmojiPicker > svg').should('not.be.focused')
    })

    it('Test to check for existing Rooms', () => {
      cy.get('.rooms-list').should('be.visible')
      cy.get('.rooms-list li').should('have.length', 2)
      cy.get(':nth-child(3) > .room-button-link').should('contain', 'Interview')
      cy.get(':nth-child(4) > .room-button-link').should('contain', 'Weekend Plans')

    })

    it('Test Create New Room Functionality', () => {
      cy.get('.new-room-form > form > input').type('ROOM123{enter}')
      cy.get('.roomactive > .room-button-link').should('contain', 'ROOM123')
      cy.get('.rooms-list li').should('have.length', 3)
    })

    it('Test Delete Room Functionality', () => {
       cy.get('button[name="ROOM123"]').click()
       cy.get('.rooms-list li').should('have.length', 2)
    })

    it('Test Search Room Functionality', () => {
      cy.get('.search-room').type('Interview')
      cy.get('.rooms-list li').should('have.length', 1)
      cy.get('.search-room').clear()
      cy.get('.rooms-list li').should('have.length', 2)
    })

    it('Test Adding new User', () => {
      cy.get(':nth-child(3) > .room-button-link').click()
      cy.get(':nth-child(1) > [data-test=button]').click()
      cy.get('[data-test=input]').type('annabella')
      cy.get('.btn-primary').click()
      cy.get('.swal2-header').should('be.visible')
      cy.get('.swal2-confirm').click()
    })

    it('Test Deleteing new User', () => {
      cy.get(':nth-child(3) > .room-button-link').click()
      cy.get(':nth-child(2) > [data-test=button]').click()
      cy.get('[data-test=input]').type('annabella')
      cy.get('.btn-primary').click()
      cy.get('.swal2-header').should('be.visible')
      cy.get('.swal2-confirm').click()
    })

    it('Test Sending new message without emoji', () => {
      cy.get(':nth-child(3) > .room-button-link').click()
      cy.get('.send-message-form > input').type('Hi there{enter}')
      cy.get('.message-text').should('contain', 'Hi there')
    })

    it('Test Sending new message with emoji', () => {
      cy.get(':nth-child(3) > .room-button-link').click()
      cy.get('.send-message-form > input').type('Hi there')
      cy.get('.toggle-emoji > svg').click()
      cy.get('.emoji-mart').should('be.visible')
      cy.get('[aria-label="Frequently Used"] > .emoji-mart-category-list > :nth-child(1) > .emoji-mart-emoji > span').click()
      cy.get('.emoji-mart').should('be.not.visible')
      cy.get('.send-message-form > input').type('{enter}')
      cy.get('.message-text').should('contain', 'Hi there👍')
    })

    it('Test Logout functionality', () => {
      cy.get('.app-logout').click()
      cy.url().should('contain', '/')
    })


})
