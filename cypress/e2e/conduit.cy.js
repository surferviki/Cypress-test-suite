describe('Conduit React App', function () {


    it('Test the react app', function () { 
       cy.visit('https://react-redux.realworld.io/')
       cy.title().should('include', 'Conduit')
       cy.contains('Sign in').click()
       cy.get('input[type="email"]').type('vikibiki18@gmail.com')
       cy.get('input[type="password"]').type('Wipro@123')
       cy.get('button[type="submit"]').click()
       cy.contains('No articles are here... yet.')
       cy.contains('New Post').click()
       cy.get('input[placeholder="Article Title"]').type('Dev-Test Pairing')
       cy.get('input[placeholder="What\'s this article about?"]').type('Shift left')
       cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Early testing')
       cy.get('input[placeholder="Enter tags"]').type('Testing')
       cy.contains('Publish Article').click()
       
    }) 

})