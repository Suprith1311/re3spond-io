describe('post api test', () => {

    const bookingData = require('../fixtures/bookingCreate.json');
  
    it('post users', ()=> {
     //1.Create a User suing the endpoint
      cy.request({
          method : 'POST',
          url : 'https://restful-booker.herokuapp.com/booking',
          headers : {
              'authorization' : "Bearer "
          },
          body : {
            "firstname": bookingData.firstname,
            "lastname" : bookingData.lastname, 
            "totalprice":bookingData.totalprice, 
            "depositpaid" : bookingData.depositpaid, 
            "bookingdates" : bookingData.bookingdate, 
            "checkin" : bookingData.checkin, 
            "checkout": bookingData.checkout,
             "additionalneeds": bookingData.additionalneeds, 
          
          }
          
      }).then((res)=> {
        expect(res.status).to.equal(201)
        expect(res.body).has.property('Email',bookingData.Email)
        expect(res.body).has.property('FirstName',bookingData.FirstName)
        cy.log(JSON.stringify(res))
      }) /* 2. Get Request to test the given/created Employee record by storing id*/
      .then((res) => {
        const id = res.body._id
        cy.log("Employee id is " + id);
  
        cy.request({
          method: 'GET',
          url : 'https://restful-booker.herokuapp.com/booking',
          headers : {
            'authorization' : "Bearer "
        }
  
        }).then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).has.property('lastname',bookingData.Email)
          expect(res.body).has.property('firstname',bookingData.firstname)
        })
        
      })
  })
  })