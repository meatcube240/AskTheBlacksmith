var answers = [
  'stripes are a state of mind',
  'you pull it down and i put it up',
  'lets go',
  'only strike when the iron is hot',
  'My neighbors cat used to ask me the same question'
]
function newQuote(){
  var randomNumber = Math.floor(Math.random() * (answers.length));
  document.getElementById('quoteDisplay').innerHTML = answers[randomNumber];
}
