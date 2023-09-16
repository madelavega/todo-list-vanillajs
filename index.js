import TasksList from './components/TasksList.js';
import Header from './components/Header.js';

const tasksListTarget = document.getElementById('tasksList');
const headerTarget = document.getElementById('header');
const tasksList = new TasksList();
const header = new Header();

const initEventListeners = () => {
  header.on('onAddTask', (value) => {
    tasksList.addTask(value);
  });
};

initEventListeners();

header.appendTo(headerTarget);
tasksList.appendTo(tasksListTarget);
