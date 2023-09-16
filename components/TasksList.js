import List from '../common/List.js';
import Task from './Task.js';

class TasksList extends List {
  static deleteClass = 'deleteTask';

  constructor() {
    super({title: 'Tareas'});
    this.#initEventListeners();
  }

  getTasks() {
    return Object.values(this.getListNodes());
  }

  addTask(description) {
    const id = this.genId();
    const newTask = { description, id, deleteClass: TasksList.deleteClass };
    const task = new Task(newTask);
    this.addChild(task, id);
  }

  removeTask(idToRemove) {
    this.removeChild(idToRemove);
  }

  #initEventListeners() {
    this.baseNode.addEventListener('click', ({ target }) => {
      if (target.classList.contains(TasksList.deleteClass)) {
        const idTask = Number(target.getAttribute('data-id'));
        this.removeTask(idTask);
      }
    });
  }
}

export default TasksList;
