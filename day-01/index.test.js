const { reverseSentence, titleCase, oddishOrEvenish,  } = require('./index');

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
});
