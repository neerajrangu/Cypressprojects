/// <reference types="cypress"/>

// require('cypress-xpath');

const x = require('./TestData.json');
describe('xpath example', ()=>{


    it('verifyLogin using xpath', ()=>{


        cy.visit('https://www.amazon.in/')


        //get ---- CSS
        // cy.get("//input[@placeholder='Search Amazon.in']").type('enterValueUsingXpath')

        //xpath
        cy.xpath("//input[@placeholder='Search Amazon.in']").type('Iphone15')
        cy.xpath('//input[@value="Go"]').click()
        cy.xpath("//span[text()='Samsung']").check({force:true})
    

    

        



    })


})