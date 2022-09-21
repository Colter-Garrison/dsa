class Queue {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    this.#list.shift();
  }

  hasNext() {
    return this.#list.length ? true : false;
  }

  get readableArr() {
    return this.#list;
  }
}

module.exports = { Queue };
