Cypress.Commands.add("Login", (username, password) => {

  cy.get("#user_name").type("9841012345")  
  cy.get("#user_password").type("Webuser@123")  
  cy.get("#btnSubmit").click()  

})

// beforeEach(() => {
//    cy.visit("http://thaili.digihub.com.np/")
//   cy.Login("username", "password")
 
// })