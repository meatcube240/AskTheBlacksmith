var answers = [
  'stripes are a state of mind',
  'you pull it down and i put it up',
  'it is whiskey time',
  'do not overwhelm the woodchipper',
  'just cook good food',
  'do not fear the sassy female',
  'always protect the baby yoda',
  'Redbull and alcohol is all you need to get through',
  'lets go',
  'A wise man once said when you are hungry you should eat',
  'only strike when the iron is hot',
  'I need to consult the morning crackle and pop',
  'My neighbors cat used to ask me the same question',
  'ask again later',
  'no',
  'i dont care',
  'if you need it then add it to the cart'
]
function newQuote(){
  var randomNumber = Math.floor(Math.random() * (answers.length));
  document.getElementById('quoteDisplay').innerHTML = answers[randomNumber];
}
