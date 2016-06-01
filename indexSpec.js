var chai = require('chai');
var expect = require('chai').expect;
var word = require('./index');

describe('Sanitize', function(){
  var inputWord = 'HELLO WORLD';
  var outputWord = word.sanitize(inputWord);

  it ('returns lowercase of a string', function(){
    expect(outputWord).to.equal('hello world');
    expect(outputWord).to.not.equal('HELLO WORLD');
    expect(outputWord).to.be.a('string');
    expect(outputWord).to.not.be.a('number');
    expect(outputWord).to.contain('hello');
  });
  it ('removes any hyphen')
  // not running any test - should output 'pending'
})
