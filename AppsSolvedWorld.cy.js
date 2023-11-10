describe('api testing', () => {
  
  it("Approach1- Hard Coded json object", () => {

    const requestBody={
                    tourist_name: "Mike",
                    tourist_email: "mike12345@gmail.com",
                    tourist_location: "Paris"
                    }

    cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody

    }) 
    .then( (response) =>{
          expect(response.status).to.eq(201)
          expect(response.body.tourist_name).to.eq("Mike")
          expect(response.body.tourist_email).tp.eq("mike123456@gmail.com")
          expect(response.body.tourist_location).tp.eq("Paris")
    })
    


    })
    
  })