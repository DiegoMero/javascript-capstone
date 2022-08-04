const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXAYSzFtiLQq1yK2hMWK/likes';

const addApiLikes = (id) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const getApiLikes = (idName, eltarget) => {
  fetch(baseUrl)
    .then(async (response) => {
      const likeInfo = await response.json();
      likeInfo.forEach((element) => {
        if (element.item_id === idName) {
          const numberOfLikes = element.likes;
          eltarget.innerHTML = `${numberOfLikes} likes`;
        }
      });
    });
};

export { addApiLikes, getApiLikes };