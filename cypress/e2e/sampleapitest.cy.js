describe('API Testing', () => {
    
    it('GET - read', () => {
        cy.request('/employee/1').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data.id).equals(1)
            expect(response.body.status).equals('success')
        })
    })

    // it('POST - create', () => {
    //     const item = {"name":"test","salary":"123","age":"23"}
    //     cy.request('POST', '/create', item)
    //     .its('body')
    //     .its('data')
    //    // .should('deep.eq', item)
    //    .should('include', {name:'test'})
    // })

    // it('PUT - update', () => {
    //     const item = {"name":"test1"}
    //     cy.request({method:'PUT', url:'/update/1', body:item, failOnStatusCode: false}).its('status').should('eq', 401)
    // })
})