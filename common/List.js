import Appendable from './Appendable.js';

class List extends Appendable {
  static #id = 0;
  #listNodes = {};

  constructor({ title }) {
    super();
    this.title = title;
    this.#createListNode();
  }

  #createListNode() {
    this.baseNode = document.createElement('ul');

    const liHeaderEl = document.createElement('li'),
      liTitleEl = document.createElement('h4');

    this.baseNode.setAttribute('class', 'collection with-header');
    liHeaderEl.setAttribute('class', 'collection-header');

    this.baseNode.appendChild(liHeaderEl).appendChild(liTitleEl).textContent = this.title;
  }

  genId() {
    return List.#id++;
  }

  getListNodeValues() {
    return Object.values(this.#listNodes);
  }

  getListNodes() {
    return this.#listNodes;
  }

  addChild(child, id) {
    child.appendTo(this.baseNode);
    this.#listNodes = {
      ...this.#listNodes,
      [id]: child
    };
  }

  removeChild(idToRemove) {
    this.#listNodes[idToRemove].destroy();
  }
}

export default List;
