/// <reference types="cypress" />



describe('verify frame test', () => {



    it('frame test', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')


         
         cy.iframe('#mce_0_ifr').clear().type("Hello neeraj").type('{ctrl}A')
                    


        //click on bold button inside frame
        cy.get('[title="Bold"]').click()

    })





   


    



})

