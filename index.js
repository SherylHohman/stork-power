exports.sanitize = function(word) {
  return word.toLowerCase().replace(/-/g, ' ');
}

exports.tokenize = function(sentence) {
  return sentence.split(' ');
}

exports.info = function(callback){
  var https = require('https');
  var options = {
    host: 'api.github.com',
    path: '/repos/webpack/webpack',
    method: 'GET',
    headers: {
      'User-Agent': 'webpack'
    }
  };

  var str = '';
  https.request(options, function(response){
    response.on('data', function(data){
      str += data;
    })

    response.on('end', function(){
      callback(JSON.parse(str));
    })

    response.on('error', function(){
      console.log(error);
      callback(error);
    })
  })
  .end();
};

exports.infoLang = function(infoFunc, callback){
  // infoFunc is the exports.info function above
  //  Actually it'll be the sinon stub version, representing the info func above !
  // reply is the reply from the [github] API call / stub "reply"all
  // callback is the asynch-safe return value from this function
  infoFunc(function(reply){
    callback('Language is ' + reply.language);
  });
};
