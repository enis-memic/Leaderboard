import { results } from './getElem.js';

class DisplayScores {
  display = async () => {
    let loading = true;
    loading &&
      (results.innerHTML = `
      <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div class="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
    </div>
      `);
    try {
      const data = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/'
      );
      const { result } = await data.json();
      let str = '';
      result.map((data) => {
        str += `
            <tr>
                <td>${data.user}</td>
                <td>${data.score}</td>
            </tr>
            `;
        return data;
      });
      results.innerHTML = str;
      loading = false;
    } catch (error) {
      console.error(error.message);
      loading = false;
    }
  };
}

export default DisplayScores;
