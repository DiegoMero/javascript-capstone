/* eslint-disable no-unused-expressions */
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXAYSzFtiLQq1yK2hMWK/likes';

// const addApiLikes = (id) => {
//   fetch(baseUrl, {
//     method: 'POST',
//     headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     body: JSON.stringify({
//       item_id: id,
//     }),
//   });
// };

function addApiLikes(id) {
  const bable = async () => {
    const request = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    const data = await request.status;
    return data;
  };

  bable().then(
    (value) => { value === '201'; },
    (error) => {
      throw error;
    },
  );
}

const getApiLikes = (idName, eltarget) => {
  fetch(baseUrl)
    .then(async (response) => {
      const likeInfo = await response.json();
      likeInfo.forEach((element) => {
        if (element.item_id === idName) {
          const numberOfLikes = element.likes;
          eltarget.innerHTML = `${numberOfLikes}`;
        }
      });
    });
};

export { addApiLikes, getApiLikes };