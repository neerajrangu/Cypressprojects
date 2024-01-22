/// <reference types="cypress"/>
describe('verify HRM App', () => {


    it('TC01: verify login feature', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.title().should('eq', 'OrangeHRM')
        cy.url().should('contain', 'login')




        cy.get('input[name="username"]').clear().type('Admin').should('have.value', 'Admin')
        cy.get('[type="password"]').clear().type('admin123').should('have.value', 'admin123')


        cy.get('[type*="sub"]').click()

        cy.title().should('eq', 'OrangeHRM')

        cy.url().should('contain', 'dashboard')


        cy.get('span[class="oxd-userdropdown-tab"]').click()
        cy.get('[href="/web/index.php/auth/logout"]').click()

        cy.url().should('contain', 'login')


    })
})