describe('Scenario 2: Users are able to filter search results under Women category by Color and Category ', () => {
  //Navigate to the Homepage
  it('HomePage', () => {
    cy.visit('http://automationpractice.com/index.php')
  })

  //Click on Women Category
  it('Click on Women category', () => {
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
    .click();
  })

  //Select any value from the Color and Category filter item
  it('Select Color and Category Item', () => {
    //Selecting Category as Tops
    cy.get('#layered_category_4').check();
    //Selecting Color as White
    cy.get('#layered_id_attribute_group_8').click();
    cy.wait(4000);
  })

  //Validate that the results match to categories and color where the name of the item is Blouse
  it('Validation That the search results matches', () => {
    cy.get('.right-block > h5 > .product-name').should('contain','Blouse');
  })

})


