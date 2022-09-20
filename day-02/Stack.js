class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  classPush(item) {
    this.#list.push(item);
  }

  classPop() {
    this.#list.pop();
  }

  classPeek() {
    return this.#list[this.#list.length - 1];
  }

  get readableArr() {
    return this.#list;
  }


}

module.exports = { Stack };
