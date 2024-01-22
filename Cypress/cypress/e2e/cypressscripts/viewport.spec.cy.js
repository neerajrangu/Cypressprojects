/// <reference types='cypress'/>

describe("view port",()=>{
    it("port",()=>{

        cy.viewport("samsung-note9")

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})