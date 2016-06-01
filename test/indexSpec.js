var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index');

describe('Sanitize', function(){
  // Hooks: initialize database before, close files after tests, etc
  // before(function(){})
  // beforeEach(function(){})
  // after(function(){})
  // afterEach(function(){})

  // to run just this test, change to "it.only"
  it ('returns lowercase of a string', function(){
    var inputWord = 'HELLO WORLD';
    var outputWord = word.sanitize(inputWord);

    expect(outputWord).to.equal('hello world');
    expect(outputWord).to.not.equal('HELLO WORLD');
    expect(outputWord).to.be.a('string');
    expect(outputWord).to.not.be.a('number');
    expect(outputWord).to.contain('hello');
  });

  // to skip this test, change to "it.skip"
  it ('removes any hyphen', function(){
    var inputWord = 'HELLO-WORLD';
    var outputWord = word.sanitize(inputWord);

    expect(outputWord).to.equal('hello world');
  });
});

describe('Tokenize', function(){
  it ('splits strings to an array of words', function(){
    var sentence = "hello world";
    var tokenizedSentence = word.tokenize(sentence);

    expect(tokenizedSentence).to.include.members(["hello", "world"]);
  });
});
