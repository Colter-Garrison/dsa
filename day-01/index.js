function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() +  word.substring(1))
    .join(' ');
}

function oddishOrEvenish(num) {
  return num
    .toString()
    .split('')
    .map((number) => parseInt(number))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  % 2 === 0 ? 'Evenish' : 'Oddish';
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish };
