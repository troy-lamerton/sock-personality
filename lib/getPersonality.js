module.exports = getPersonality

function getPersonality(data){
  var personality = data.tree.children.find(obj => obj.id === 'personality')
  var needs = data.tree.children.find(obj => obj.id === 'needs')
  var values = data.tree.children.find(obj => obj.id === 'values')

  var topPersonality = personality.children.sort(sorter)[personality.children.length -1]
  var topNeeds = needs.children.sort(sorter)[personality.children.length -1]
  var topValues = values.children.sort(sorter)[personality.children.length -1]

  function sorter(a, b){
    return a.percentage - b.percentage
  }

  return {personality: topPersonality.name, needs: topNeeds.name, values: topValues.name}
}
