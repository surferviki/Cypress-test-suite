describe('Conduit React App', function () {


    it('Test the react app', function () { 
       cy.visit('https://react-redux.realworld.io/')
       cy.title().should('include', 'Conduit')
       cy.contains('Sign in').click()
       cy.get('input[type="email"]').type('vikibiki18@gmail.com')
       cy.get('input[type="password"]').type('Wipro@123')
       cy.get('button[type="submit"]').click()
       
       
    }) 

})