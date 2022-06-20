//Quotes broken down into 3 strings
const part1 = ['It\’s good to be in', 'Those who want', 'They say every day\’s a', 'Well, when you\’re married, you\’ll', 'If you can quote the rules,', 'What happened to', 'A wrong decision', 'Some people are so far behind in a', 'There\'s no', 'C\'est que ce, message generator broken?'];
const part2 = ['something', 'respect,', 'gift', 'understand', 'then you can', 'Gary Cooper,', 'is better than', 'race', 'chemical solution'];
const part3 = ['from the ground floor.', 'give respect.', 'but why does it have to be a pair of socks?', 'the importance of fresh produce.', 'obey them.', 'the strong, silent type?', 'indecision.', 'that they actually believe they\'re leading.', 'to a spiritual problem.'];

//Return a random element of a given array
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//Change empty element to contain concatenated string
function displayMessage(event) {
  let str1 = pickRandom(part1);
  let messageBox = document.getElementsByTagName('p')[0];
  document.getElementsByClassName('invisible')[0].style.display = 'none';

  if (str1 === part1[9]) {
    document.getElementsByClassName('invisible')[0].style.display = 'flex';
    messageBox.classList.remove('typewriter');
    messageBox.offsetWidth;
    messageBox.classList.add('typewriter');
    messageBox.innerHTML = `${str1}`;
  } else {
    let str2 = pickRandom(part2);
    let str3 = pickRandom(part3);
    messageBox.classList.remove('typewriter');
    messageBox.offsetWidth;
    messageBox.classList.add('typewriter');
    messageBox.innerHTML = `${str1} ${str2} ${str3}`;
  }
}

//Add event handler to button
document.getElementsByClassName('btn')[0].addEventListener('click', displayMessage);
