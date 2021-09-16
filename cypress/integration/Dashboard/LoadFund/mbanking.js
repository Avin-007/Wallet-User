describe("LoadFund", () => {

  it("loads through Mbanking", () => {
  
    cy.contains("Load Fund").click()
    cy.contains("M-Banking").click()
    cy.screenshot()
  })
  
  
  })