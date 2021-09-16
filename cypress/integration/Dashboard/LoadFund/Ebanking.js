describe("LoadFund", () => {

it("loads through Ebanking", () => {

  cy.contains("Load Fund").click()
  cy.contains("E-Banking").click()
  cy.screenshot()
})


})