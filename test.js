/// <reference types="Cypress" />

describe('get api user tests', () => {

    it('get users', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public-api/users',
        headers: {
          'authorization': "Bearer 675058b87e2c7c9ad934db608fa7c3509d50b1a543c4cac3d3aae78c4bfc05a8"
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers['content-type']).to.eq('application/json');
        const users = res.body.data;
        expect(users.length).to.be.gte(20);
  
        // Test the properties of one of the users in the response.
        const firstUser = users[0];
        expect(firstUser.name).to.be.a('string');
        expect(firstUser.email).to.be.a('string');
        expect(firstUser.gender).to.be.a('string');
      });
    });
  
  });