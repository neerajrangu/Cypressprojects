/// <reference types ="cypress" />

describe("PUT method",()=>{

    it("putmthod",()=>{

        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "leader",
                "id":1
            }

        })
        .its('status')
        .should('equal',200)
    })
})