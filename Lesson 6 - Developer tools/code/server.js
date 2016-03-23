var express = require('express'),
    bodyParser = require('body-parser');
/// http://expressjs.com/api.html

var app = express(),
    numbers = [];

app.use(express.static(__dirname + '/'));
app.use(bodyParser.text()); // parse text

//GET /today returns date in string
app.get('/today', function (req, res) {
    setTimeout(function () {
        res.send((new Date()).toLocaleDateString());
    }, 1000);
});

//POST /numbers should save number for later
app.post('/numbers', function (req, res) {
  numbers.push(+req.body);
  res.send('Number stored');
});

//GET /numbers should return comma separated list of numbers
app.get('/numbers', function (req, res) {
    setTimeout(function () {
        res.send(numbers.join(", "));
    }, 1000);
});

//DELETE /numbers should empty numbers array
app.delete('/numbers', function (req, res) {
  numbers = [];
  res.send('Numbers deleted');
});

//GET /numbers/:op should return result of given operation of stored numbers (check request.params)
// available operations are sum, difference, multiplication, division
// return result as strings
app.get('/numbers/:op', function (req, res) {
    setTimeout(function () {
        if (numbers.length === 0) {
            res.send('0');
            return;
        }
        
        switch(req.params.op) {
            case 'sum' : 
                res.send(numbers.reduce((a, b) => a + b, 0).toString());
                break;
            case 'difference' : 
                res.send(numbers.slice(1).reduce((a, b) => a - b, numbers[0]).toString());
                break;
            case 'multiplication' : 
                res.send(numbers.reduce((a, b) => a * b, 1).toString());
                break;
            case 'division' : 
                res.send(numbers.slice(1).reduce((a, b) => a / b, numbers[0]).toString());
                break;      
            default : res.send('Unsupported operation');                          
        }
        
    }, 1000);
});


app.listen(8080, function () {
    console.log('Server is running on localhost:' + this.address().port);
});
