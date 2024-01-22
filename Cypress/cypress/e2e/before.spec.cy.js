/// <reference types ="cypress"/>

describe('nop test', () => {


    before(()=>{

        cy.log('==========before==========')
        

    })






    beforeEach(()=>{

        cy.log('==========beforeEach==========')
        

    })


    afterEach(()=>{

        cy.log('==========afterEach==========')


    })

    it('enter email', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(2000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin123')

        // cy.get('#RememberMe').click()

        cy.get('.oxd-button').click()


        // //find example
        cy.get('ul.oxd-main-menu').find('[href*="viewMyDetails"]').should('have.length', 1)

        cy.get('.oxd-userdropdown-name').click()

        cy.get('[href="/web/index.php/auth/logout"]').click()
        
        cy.contains('button','Login').should('have.length.at.least', 1)


    })


})