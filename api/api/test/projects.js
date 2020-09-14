const chai = require("chai");
const expect = chai.expect;
var request = require("request");

it("It shoulf GET all projects", function (done) {
  request("http://localhost:8080/projects", function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    expect(body).to.be.an("string");
    done();
  });
});
