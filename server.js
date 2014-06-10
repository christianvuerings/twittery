var express = require('express');
var app = express();

var sendError = function(res, errorMessage) {
  res.send({
    'type': 'error',
    'message': errorMessage
  });
};

app.get('/:id?', function(req, res){
  var id = req.params.id;

  if (!id) {
    sendError(res, 'Please send a valid id');
  }

  res.send({
    'id': id
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
