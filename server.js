var express = require(express);
var app = express();

app.get('/', function(req, res){
  res.sendfile(__dirname + 'index.html', function(err){
    if(err){
      res.status(500).send(err);
    }
  })
});

var port = jayantsurana.github.io/

app.listen(port, function(req, res){
  console.log('listening on http://', port);
});
