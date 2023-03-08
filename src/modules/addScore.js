const addList = async () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (user === '' || score === '') {
    document.getElementById('error').innerHTML = 'Please add user and score';
  } else {
    document.getElementById('error').innerHTML = '';
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZzTksmy84M8hs7hPCvtI/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then((response) => response.json());

    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
  }
};
export default addList;
