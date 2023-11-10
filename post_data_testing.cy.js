describe('HTTP Requests',()=>{

  it("GET Call", ()=>{
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200);
  })


  it("Post Call", ()=>{

    cy.request(  {
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title:"Qups post",
        body:"This is post call",
        userID:1
      }
    })

    .its('status')
    .should('equal', 201);

  })

  it("Put Call", ()=>{


    cy.request({
      method: 'PUT',
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "The post - Updated",
        body: "This is put call",
        userId: 1,
      }
    })
    .its('status')
    .should('equal', 200);
  })


  it("Delete Call", ()=>{

    cy.request({
      method: 'DELETE',
      url:"https://jsonplaceholder.typicode.com/posts/1"

    })

    .its('status')
    .should('equal', 200);
    
  })







})

//terminal:   npx cypress run --spec cypress\e2e\ApiTesting\post_data_testing.cy.js
//terminal:   npx cypress open