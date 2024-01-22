/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('POST - create Tourist', () => {


        console.log('***************' +Math.random().toString(5).substring(2));

        let authToken = "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"

        let resquestBody = {
            "name": "morpheus",
            "job": "lllleader"
        }

        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users ',
            body: resquestBody,

            headers: {

               "content-type": "application/json",
              "Authorization": "Bearer" + authToken

             }
            



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);

            //print complete response body into cypress console
            cy.log(JSON.stringify(resp.body))


            expect(resp.status).to.eq(201)              //verify status code ---201

            expect(resp.body.tourist_name).to.eq(resquestBody.name) 

            
           // expect(resp.body.tourist_email).to.eq(resquestBody.job) 
           // expect(resp.body.tourist_location).to.eq('Paris') 

        })




    })




})
