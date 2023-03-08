const list = document.querySelector('.scores');

const display = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZzTksmy84M8hs7hPCvtI/scores/'
  )
    .then((response) => response.json())
    .then((json) => {
      list.innerHTML = ' ';
      for (let i = 0; i < json.result.length; i += 1) {
        const item = document.createElement('li');
        item.classList.add('users');
        item.textContent = `${json.result[i].user} : ${json.result[i].score}`;
        list.appendChild(item);
      }
    });
};
export default display;
