/// <reference types="cypress" />



describe('verify dropdown test', () => {


    it('dropdown test', () => {

        //launch application
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('[id="zcf_address_country"]').select("Greece")

        


        


    })


    

})