var express = require('express'); 
var bodyParser = require('body-parser');

var app = express(); 

var port = 9000; 

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json()); 

//endpoints 
app.get('/interest_rate', function(req, res) {
	var num = Math.floor(Math.random() * 2000) / 100;
	res.json(num);
}); 

//server listening 
app.listen(port, function(){
	console.log('Listening on port: ', port); 
});