/// <reference types ="cypress" />

describe('forget_password', () => {

  it("creates new user", () => {
        cy.visit("http://thaili.digihub.com.np")
        cy.contains("Forgot Password").click()
        cy.get('#MobileNo').type("")
        cy.contains("Reset Password").click()



  })

})