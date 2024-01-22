/// <reference types ='cypress' />
const n =require(".././e2e/cypressscripts/TestData.json")
describe('template spec', () => {
  it('passes', () => {
    cy.visit(n.amazon)
    cy.get('[placeholder="Search Amazon.in"]').clear().type("Iphone15")
    cy.get('[value="Go"]').click()

    //cy.get('div[id=deliveryRefinements] input').check({force: true})

   // cy.get('div[id=deliveryRefinements] input').click({force: true, multiple: true})
    
   

  })
})