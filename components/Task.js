import Appendable from '../common/Appendable.js';

class Task extends Appendable {
  constructor({ description, id, deleteClass }) {
    super();
    this.description = description;
    this.id = id;
    this.deleteClass = deleteClass;
    this.createBaseNode();
  }

  createBaseNode() {
    this.baseNode = document.createElement('li');
    const divEl = document.createElement('div'),
      aEl = document.createElement('a'),
      iconEl = document.createElement('i');

    this.baseNode.setAttribute('class', 'collection-item');
    aEl.setAttribute('class', 'secondary-content');
    aEl.setAttribute('href', '#!');
    this.baseNode.setAttribute('class', 'collection-item');
    iconEl.setAttribute('class', `material-icons ${this.deleteClass}`);
    iconEl.setAttribute('data-id', this.id);

    this.baseNode.appendChild(divEl).textContent = this.description;

    divEl.appendChild(aEl).appendChild(iconEl).textContent = 'delete';
  }

  destroy() {
    this.baseNode.remove();
  }
}

export default Task;
