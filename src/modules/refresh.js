import display from './displayScore.js';

const list = document.querySelector('.scores');
const refresh = () => {
  list.innerHTML = '';
  display();
};

export default refresh;
