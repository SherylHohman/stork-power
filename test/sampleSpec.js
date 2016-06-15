var chai   = require('chai');
var expect = require('chai').expect;
var word   = require('./../src/client/sample');

var sinon     = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

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


// use sinon/sinon-chai to create a stub for mocking the github API call (delete the Mocha-chai version)
describe('infoLang: from (sinon stub for github call)' , function(){
  it('return language used in "github" repo', function(done){
    ghRepoReply = {
      'language': 'JavaScript'
    };
    var stub_for_wordInfoFunc = sinon.stub().callsArgWith(0, ghRepoReply);

    // here we pass in stub instead of word.info
    // as we don't want to make the actual API call
    word.infoLang(stub_for_wordInfoFunc, function(reply){
      expect(reply).to.equal('Language is JavaScript');
      console.log('\tHELLO, ', reply);
    });

    // remember: must call our asynch callback param !
    done();
  });
});




