var test = require('tape')
var testData = require('./test.json')
var getPersonality = require('../lib/getPersonality')

test('getPersonality returns three personality traits', function (t) {

  // action
  var expected ={personality: 'Extraversion', needs: 'Self-expression', values: 'Hedonism'}
   var result = getPersonality(testData)
    t.ok(result.personality)
    t.ok(result.needs)
    t.ok(result.values)
    t.deepEqual (expected, result)
    t.end()
})
