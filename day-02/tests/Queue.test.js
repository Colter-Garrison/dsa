const { Queue } = require('../Queue');

describe('Queue', () => {
  it('enqueue should add an item to the back of the queue', () => {
    const newItemArr = new Queue([]);
    newItemArr.enqueue('fox');
    newItemArr.enqueue('goose');
    newItemArr.enqueue('lizard');
    expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });

  it('dequeue should remove an item from the front of the queue', () => {
    const newItemArr = new Queue(['fox', 'goose', 'lizard']);
    newItemArr.dequeue();
    expect(newItemArr.readableArr).toEqual(['goose', 'lizard']);
  });

  it('hasNext should return true or false if there are objects in the array or not', () => {
    const newItemArr = new Queue(['fox', 'goose']);
    const noItems = new Queue([]);
    expect(newItemArr.hasNext()).toEqual(true);
    expect(noItems.hasNext()).toEqual(false);
  });
});
