var express = require('express')
var app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log("Server is running at localhost:3000")
})
