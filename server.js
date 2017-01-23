var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/avatar1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'avatar1.jpg'));
});
app.get('/ui/avatar2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'avatar2.jpg'));
});
app.get('/ui/l1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l1.jpg'));
});
app.get('/ui/l2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l2.jpg'));
});
app.get('/ui/l3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l3.jpg'));
});
app.get('/ui/l5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l5.jpg'));
 app.get('/ui/l7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l7.jpg')); 
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
