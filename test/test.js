// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../app").getApp;

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/')
	 .expect(200, done); 
  });
  
  it('should return 404', function(done){
    request(app)
     .get('/random')
	 .expect(404)
	 .end(function(err,res){
      res.status.should.equal(404);
      done();
	 });
  })
  });
  
  describe('GEt /aboutus' , function() {
     it('éxpects Http response 200' , function (done) {
         
        request(app)
        .get('/aboutus')
        .expect(200 ,done);
     }); 
  });
  

