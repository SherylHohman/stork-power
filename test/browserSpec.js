var webdriver = require('selenium-webdriver');

var client = new webdriver.Builder().withCapabilities({
  'browserName': 'chrome'
}).build();

var chai = require('chai');
var expect = chai.expect;

describe('from Homepage', function(){
  var url = 'http://localhost:8080';

  beforeEach(function(done){
    client.get(url).then(function(){
      done();
    })
  })

  after(function(done){
    client.quit().then(function(){
      done();
    })
  });

  it('returns the title of the page')
  it('returns the h1 of the page')

});
