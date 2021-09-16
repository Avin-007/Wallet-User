/// <reference types ="cypress" />

describe('Login', () => {

  beforeEach(() => {

    // root-level hook
    cy.visit("http://thaili.digihub.com.np/")

    // runs once before all tests
  })

 it("validates Title", () => {
      cy.title().should('eq', 'Login')
               })

   it("test blank mbl/pass", () => {

    cy.get("#user_name").type("00000000000")  
    cy.get("#user_password").type("1234567890")  
    cy.get("#btnSubmit").click()  
    cy.contains("Invalid Credentials!")
    
  })


  it("test valid mbl & invalid psw", () => {

    cy.get("#user_name").type("9841012345")  
    cy.get("#user_password").type("1234567890")  
    cy.get("#btnSubmit").click() 
    cy.contains("Invalid Credentials!") 
    
  })

  it("test valid mbl/pass", () => {

    cy.get("#user_name").type("9841012345")  
    cy.get("#user_password").type("Webuser@123")  
    cy.get("#btnSubmit").click()  
    cy.url().should('eq', 'http://thaili.digihub.com.np/Home/DashBoard')
    
  })


  // it('request API', () => {
  // cy.visit('/')
  // cy.request({

  //      method: 'POST',
  //      url: '/login',
  //      body: {
  //        name:''

  //      }


  // })

  })

// })


  





