
/// <reference types ="cypress" />

describe('new user registration', () => {

  it("creates new user", () => {
        cy.visit("http://thaili.digihub.com.np")
        cy.contains("Register").click()
        cy.get('input[name=MobileNumber]').type("9841023456")
        cy.get("#btnSubmit").click()

        cy.wait(5000)
        cy.get('#ActivationCode').type("")
        cy.get('#btnSubmit').click()



  })

})