const { BinaryTreeNode } = require('./BinaryTreeNode');

describe('node based data structures', () => {
  it('example test', () => {
    expect(1).toBe(1);
  });

  it('creates a new tree', () => { 
    const A = new BinaryTreeNode('A');
    const B = new BinaryTreeNode('B');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(C);
    B.add(D);
    expect(B.value).toEqual('B');
    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('C');
    expect(B.right.right.value).toEqual('D');
  });
});
