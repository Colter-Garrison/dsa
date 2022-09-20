const { reverseSentence, titleCase, oddishOrEvenish, at, anagrams, } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('titleCase', () => {
    it('should capitalize first letter of each word', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });

  describe('oddishOrEvenish', () => {
    it('determines if odd', () => {
      expect(oddishOrEvenish(121)).toBe('Evenish');
    });
    it('determines if even', () => {
      expect(oddishOrEvenish(41)).toBe('Oddish');
    });
  });

  describe('at', () => {
    it('takes an array at an idex and returns the item at corresponding index', () => {
      const arr = ['a', 'b', 'c', 'd', 'e'];
      expect(at(arr, 1)).toEqual('b');
      expect(at(arr, 3)).toEqual('d');
    });
  });

  describe('anagrams', () => {
    it('return true if two words are anagrams', () => {
      const wordOne = 'superintended';
      const wordTwo = 'unpredestined';
      const wordThree = 'pictorialness';
      const wordFour = 'documentarily';
      expect(anagrams(wordOne, wordTwo)).toEqual(true);
      expect(anagrams(wordThree, wordFour)).toEqual(false);
    });
  });
});
