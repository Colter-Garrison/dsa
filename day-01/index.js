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

function fizzBuzz(number) {
  return number > 0 ? Array.from({ length: number }, (v, i) => i + 1).map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
  }) : [];
}

function multiplesOfN(n) {
  const multiples = [];
  for (let i = 1; i <= 50; i++) {
    if (n * i <= 50) {
      multiples.push(n * i);
    }
  }
  return multiples;
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, anagrams, fizzBuzz, multiplesOfN,  };
