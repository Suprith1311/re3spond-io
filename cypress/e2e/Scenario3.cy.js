describe('Scenario 3: Users are able to view the details of any clothing item from the POPULAR section and add them to the cart ', () => {
  //Navigate to the Homepage
  it('HomePage', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.wait(5000);
  })

  //Select any item from from the POPULAR section and add them to the cart
  it('Select Item from Popular Category', () => {
    cy.get('.button-container > a')
    .click({force: true});
  })


  //Validate that the results match to categories and color where the name of the item is Blouse
  it('Validation That the search results matches', () => {
    cy.get('.right-block > h5 > .product-name').should('contain','Faded Short Sleeve T-shirts');
  })

})


