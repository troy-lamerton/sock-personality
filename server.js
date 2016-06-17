var express = require('express')
var app = express()
var watson = require('watson-developer-cloud')
var dotenv = require('dotenv')

dotenv.load()

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/socks', function (req, res) {
  res.render('socksIndex', images)
})

app.listen(3000, function () {
  console.log("Server is running at localhost:3000")
})

var personality_insights = watson.personality_insights({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version: 'v2'
})

personality_insights.profile({
  text: 'Enter more than 100 unique words here... Water might save you from drowning. Ceaseless, impassive, water echoes what you know: sister so sick, no cure; brother drinks his own dead joy, niece takes it on the jaw. Dad just feeds his anger. You used to run until pain and wonder were the same. But running ran out and you took to the water with what you knew. Back stroke, side stroke, kick and churn, keep moving to stay afloat. Head down, stay inside the lines. Learn to breathe every other stroke, water burns the throat. Chop wood, carry water works but some days you must chop water.',
  language: 'en' },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
})
