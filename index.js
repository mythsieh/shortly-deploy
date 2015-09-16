var app = require('./server.js');

//change port to be dynamic
console.log(process.env.PORT);
var port = process.env.PORT || 4568;


app.listen(port);

console.log('Server now listening on port ' + port);
