class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if(node.value === this.value) {
      this.value = node.value;
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    } else if (node.value <= this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    }
  }

  findPerson(name) {
    
  }
}

module.exports = { PersonTreeNode };
