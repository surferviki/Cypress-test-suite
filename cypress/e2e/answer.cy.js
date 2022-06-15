describe('Answer Digital', function () {


    it('Test who we are page', function () { 
       cy.visit('https://answerdigital.com')
       cy.title().should('include', 'Answer')
       cy.get('span').contains('Who we are').click()
       cy.contains('Proudly independent')
       cy.get('span').contains('OUR ISO14001 POLICY').click()
       
       
    }) 


    it('Test Insights page', function () { 
        cy.visit('https://answerdigital.com')
           cy.get('span').contains('Insights').click()
           cy.get('span').contains('Technology').click()
           cy.contains('The NHS Needs AI Education').click()
           cy.contains('Four pillars of education')
           cy.contains('Quality control')
    
        }) 

    })