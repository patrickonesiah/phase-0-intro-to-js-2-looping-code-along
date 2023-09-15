// Code your solutions in this file
  function writeCards(stringOfNames,eventName) {
    const newCards = [];
    for (let i = 0; i < stringOfNames.length; i++) {
      //console.log(`Thank you, ${stringOfNames[i]}, for the wonderful ${eventName} gift!`);
      newCards.push(`Thank you, ${stringOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
  
    return newCards;
  }

function countDown(counter){
    while (0 <= counter) {
        console.log(counter--);
    }
}
