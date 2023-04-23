const { BinaryTreeNode } = require('./BinaryTreeNode');
const { PersonTreeNode } = require('./PersonTreeNode');

describe('node based data structures', () => {
  it('example test', () => {
    expect(1).toBe(1);
  });

  it('creates a new node on a tree', () => { 
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

  it('creates a person tree', () => {
    const Austin = new PersonTreeNode({
      name: 'Austin',
      city: 'Portland',
      state: 'Oregon'
    });
    const Colter = new PersonTreeNode({
      name: 'Colter',
      city: 'Corvallis',
      state: 'Oregon'
    });
    const Mariah = new PersonTreeNode({
      name: 'Mariah',
      city: 'Sherwood',
      state: 'Oregon'
    });
    const Aaron = new PersonTreeNode({
      name: 'Aaron',
      city: 'Austin',
      state: 'Texas'
    });
    const Jenna = new PersonTreeNode({
      name: 'Jenna',
      city: 'Portland',
      state: 'Oregon'
    });
    Austin.add(Colter);
    Austin.add(Mariah);
    Austin.add(Aaron);
    Austin.add(Jenna);
    expect(Austin.value).toEqual('Austin');
    expect(Austin.left.value).toEqual('Aaron');
    expect(Austin.right.value).toEqual('Colter');
    expect(Austin.right.right.value).toEqual('Mariah');
    expect(Austin.right.left).toEqual(null);
    expect(Austin.right.right.left.value).toEqual('Jenna');

    expect(Austin.findPerson('Jenna')).toEqual({
      name: 'Jenna',
      city: 'Portland',
      state: 'Oregon'
    });
    expect(Austin.findPerson('Aaron')).toEqual({
      name: 'Aaron',
      city: 'Austin',
      state: 'Texas'
    });
    expect(Austin.findPerson('Bob')).toEqual(null);
  });
});
