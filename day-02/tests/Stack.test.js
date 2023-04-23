const { Stack } = require('../Stack.js');

describe('Stack', () => {
  it('push should add an item to the top of an array', () => {
    const newItemArr = new Stack([]);
    newItemArr.classPush('fox');
    newItemArr.classPush('goose');
    newItemArr.classPush('lizard');
    expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });

  it('pop should remove the top item in the array', () => {
    const newItemArr = new Stack(['fox', 'goose', 'lizard']);
    newItemArr.classPop();
    expect(newItemArr.readableArr).toEqual(['fox', 'goose']);
  });

  it('peek should return the last item in the array', () => {
    const peekedItem = new Stack(['fox', 'goose', 'lizard']);
    expect(peekedItem.classPeek()).toEqual('lizard');
  });

  it('check-syntax should check to see if curly braces or parenthesis are matching', () => {
    const stack = new Stack();
    stack.checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))');
  });
});
