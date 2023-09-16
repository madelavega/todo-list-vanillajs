import Appendable from '../common/Appendable.js';
import { observable } from '../common/mixins/observable.js';

class Header extends Appendable {
  #input;
  #inputWrapper;
  #addBtnWrapper;
  #addBtn;

  constructor() {
    super();
    this.#createHeaderNode();
  }

  #createHeaderNode() {
    this.baseNode = document.createElement('div');
    this.#createInput();
    this.#createAddBtn();
    this.baseNode.appendChild(this.#inputWrapper);
    this.baseNode.appendChild(this.#addBtnWrapper);
  }

  #createInput() {
    this.#inputWrapper = document.createElement('div');
    this.#input = document.createElement('input');
    const input = this.#input,
      inputWrapper = this.#inputWrapper;

    const label = document.createElement('label');
    label.setAttribute('for', 'idTask');

    input.setAttribute('class', 'validate');
    input.setAttribute('placeholder', 'Tarea a realizar');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'idTask');
    inputWrapper.setAttribute('class', 'input-field col s10');

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(label).textContent = 'Tarea';

    input.oninput = this.onTaskInputChange;
  }

  #createAddBtn() {
    const buttonWrapper = (this.#addBtnWrapper = document.createElement('div'));
    const button = (this.#addBtn = document.createElement('a'));

    buttonWrapper.setAttribute('class', 'input-field col s2');
    button.setAttribute('class', 'waves-effect waves-light btn');
    button.setAttribute('disabled', '');

    buttonWrapper.appendChild(button).textContent = 'Añadir';

    button.onclick = this.onAddTask;
  }

  onAddTask = () => {
    this.trigger('onAddTask', this.#input.value);
    this.#input.value = '';
    this.#addBtn.setAttribute('disabled', '');
  };

  onTaskInputChange = ({ target: { value } }) => {
    if (value.length) {
      this.#addBtn.removeAttribute('disabled');
    } else {
      this.#addBtn.setAttribute('disabled', '');
    }
  };
}

Object.assign(Header.prototype, observable);

export default Header;
