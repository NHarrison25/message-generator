const part1 = ['It\’s good to be in', 'Those who', 'They say every day\’s a', 'Well, when you\’re married, you\’ll'];
const part2 = ['something', 'want respect,', 'gift', 'understand'];
const part3 = ['from the ground floor.', 'give respect.', 'but why does it have to be a pair of socks?', 'the importance of fresh produce.'];

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let str1 = pickRandom(part1);
let str2 = pickRandom(part2);
let str3 = pickRandom(part3);

//document.getElementById('*idhere*').innerHTML = `${str1} ${str2} ${str3}`;

console.log(`${str1} ${str2} ${str3}`);
