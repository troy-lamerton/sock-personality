var express = require('express')
var app = express()
var watson = require('watson-developer-cloud')
var dotenv = require('dotenv')
var getPersonality = require('./lib/getPersonality')
var socks = require('./sockWords.json')
var summaries = require('./summaries.json')

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

app.get('/socks/:sock', function (req, res) {
  var personality_insights = watson.personality_insights({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    version: 'v2'
  })
  personality_insights.profile({
    text: socks[req.params.sock],
    language: 'en' },
    function (err, response) {
      if (err)
        console.log('error:', err)
      else {
        //gets three characteristics
        var personality = getPersonality(response)
        //add the summary from summaries.json
        personality.summary = summaries[req.params.sock]
        res.render('sockResult', personality)
      }
  })
})


