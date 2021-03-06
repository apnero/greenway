var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname ));

app.use(express.bodyParser());

var postmark = require("postmark")("6d3c5ce6-1ce8-4906-b426-05eeba4fd1e2")



app.post('/getFormData', function(req, res) {
  postmark.send({
    "From": "email@plasmascape.com",
    "To": "clayton@greenwaypropertycare.com",
    "Subject": "EMAIL FROM GREENWAY",
    "TextBody": new String('From: ' + req.body.name + '.\n\rEmail: ' + req.body.email + '.\n\rPhone: ' + req.body.phone + '.\n\rAddress: ' + req.body.address + '.\n\rMessage: ' + req.body.message)
	}, function(error, success) {
    if(error) {
        res.send("We have had technical difficulties and we regret to say you email hasn't been delivered to Greenway");
       return;
    }
    res.send("Thank you for contacting us.  We will respond as soon as possible.")
	});
  
});


var port = process.env.PORT || 8000;

app.listen(port);