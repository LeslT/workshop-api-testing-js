
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {
  it('Consume GET Service', async () => {
    const response = await agent.get('https://httpbin.org/ip');
  
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  });
  
  it('Consume GET Service with query parameters', async () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };
  
    const response = await agent.get('https://httpbin.org/get').query(query);
  
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(query);
  });

  it('Consume HEAD Service', async () => {
    const response = await agent.head('https://httpbin.org/headers');

    expect(response.status).to.equal(statusCode.OK);
  });

  it('Consume PUT Service', async () => {

    const body ={
      name: 'carlos',
      age: '25',
      city: 'nn'
    }
    const response = await agent.put('https://httpbin.org/put').send(body);

    //console.log(response);
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(body);

  });

  it('Consume DELETE Service', async () => {
   
    const response = await agent.del('https://httpbin.org/delete');

    expect(response.status).to.equal(statusCode.OK);
    //expect(response.body.args).to.eql(body);

  });

  it('Consume PATCH Service', async () => {

    const body ={
      age: '26',

    }
    const response = await agent.patch('https://httpbin.org/patch').send(body);

    //console.log(response);
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(body);

  });

});



