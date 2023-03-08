import './style.css';
import addList from './modules/addScore.js';
import display from './modules/displayScore.js';
import refresh from './modules/refresh.js';

const refreshing = document.getElementById('refresh');
const submit = document.getElementById('submit');

display();

refreshing.addEventListener('click', refresh);
submit.addEventListener('click', addList);
