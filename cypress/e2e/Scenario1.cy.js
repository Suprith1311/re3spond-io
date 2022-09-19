describe('Scenario 1: Users are able to search for an item using the search bar', () => {
  //Navigate to the Homepage
  it('HomePage', () => {
    cy.visit('http://automationpractice.com/index.php')
  })

  //Put any search term in the search bar
  it('Put any search term in the search bar', () => {
    cy.get('#search_query_top').type('Printed Chiffon Dress')
    cy.get('#searchbox > .btn').click();
  })
  //Validate that the results returned matches the search term
  it('Validation That the search results matches', () => {
    cy.get('.first-in-line > .product-container > .right-block > h5 > .product-name')
    .should('contain','Printed Chiffon Dress');
    // .contains('');
  })

//<---------------------NEGATIVE PATH IF THE RESULTS DO NOT MATCH ---------------------->
//Re-Visit the homepage
it('HomePage', () => {
  cy.visit('http://automationpractice.com/index.php')
})
 //Negative validation if the search results didnot match
 it('Put non matching search term in the search bar', () => {
  cy.get('#search_query_top').type('Chinos Dress')
  cy.get('#searchbox > .btn').click();
})
//Validation that the results did nopt match in the search term
it('Results in the search term did not match', () => {
  cy.get('.page-heading').should('contain','0 results have been found.');
})

})


