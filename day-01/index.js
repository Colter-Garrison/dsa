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

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

function anagrams(wordOne, wordTwo) {
  const arrOne = wordOne.split('').sort().join();
  const arrTwo = wordTwo.split('').sort().join();
  return arrOne === arrTwo ? true : false;
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, anagrams };
