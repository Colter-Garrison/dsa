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
    if (name === this.value) {
      return this.person;
    } else if (this.value > name) {
      if (this.left === null) {
        return null; 
      } else if (this.left.value === name) {
        return this.left.person;
      } else {
        return this.left.findPerson(name);
      } 
    } else if (this.value < name) {
      if (this.right === null) {
        return null;
      } else if (this.right.value === name) {
        return this.right.person;
      } else {
        return this.right.findPerson(name); 
      }
    }
  }
}


module.exports = { PersonTreeNode };
