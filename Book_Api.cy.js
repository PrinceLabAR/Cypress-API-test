describe("API testing", ()=>{

before("creating access token",()=>{

  cy.request({

    method: 'POST',
    url: 'https://simple-books-api.glitch.me/api-clients',
    headers: { 'Content-Type': 'application/json'},

    body: {
      clientName: 'ABC',
      ClientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
    }
  }). then((response) =>{
          authToken=response.body.accessToken;
  });
});



before("creating new order",()=>{

  cy.request({

    method: 'POST',
    url: 'https://simple-books-api.glitch.me/oders/',
    headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+authToken
  
              }, 

    body: {
            "bookId": 1,
            "customerName": "The Russian"
           }
  }). then((response) =>{

          expect(response.status).to.eq(201);
          expect(response.body.created).to.eq(true);
  });
});







})