var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://reqres.in/api/users/10',
  'headers': {
    'Cookie': '__cfduid=d61c33934e62e709e585f3cac3f1d531c1597069735'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
