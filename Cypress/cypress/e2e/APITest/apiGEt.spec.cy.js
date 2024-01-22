/// <reference types="cypress"/>

describe("university",()=>{
    it.skip("univer api",()=>{

        cy.request("http://universities.hipolabs.com/search?country=India")
                                                        .its('status')
                                                        .should('eq',200)
        cy.log()
        cy.wait(4000)

    })
    it.only("univer api",()=>{

        cy.request('GET',"http://universities.hipolabs.com/search?country=India").then((resp)=>{

           cy.log(resp.status)
           cy.log(resp.duration)
           cy.log('status text: ' + resp.statusText)

           cy.log('**************' + resp.body[11].name)

           expect(resp.status).to.eq(200)
           console.log(resp)
        })
                                        

    })
})