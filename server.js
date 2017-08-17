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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/rohith', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rohith.html'));
});

app.get('/ui/page1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/ui/page2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/ui/page3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
});

app.get('/ui/page4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page4.html'));
});

app.get('/ui/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/ui/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styles.css'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
