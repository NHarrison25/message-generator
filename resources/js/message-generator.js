//Quotes broken down into 3 strings
const part1 = ['It\’s good to be in', 'Those who want', 'They say every day\’s a', 'Well, when you\’re married, you\’ll', 'If you can quote the rules,', 'What happened to', 'A wrong decision', 'Some people are so far behind in a', 'There\'s no'];
const part2 = ['something', 'respect,', 'gift', 'understand', 'then you can', 'Garry Cooper,', 'is better than', 'race', 'chemical soultion'];
const part3 = ['from the ground floor.', 'give respect.', 'but why does it have to be a pair of socks?', 'the importance of fresh produce.', 'obey them.', 'the strong, silent type?', 'indecision.', 'that they actually believe they\'re leading.', 'to a spiritual problem.'];

//Return a random element of a given array
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//Change empty element to contain concatenated string
function displayMessage(event) {
  let str1 = pickRandom(part1);
  let str2 = pickRandom(part2);
  let str3 = pickRandom(part3);
  //document.getElementById('*idhere*').innerHTML = `${str1} ${str2} ${str3}`;
}

//button.addEventListener('click', displayMessage);
