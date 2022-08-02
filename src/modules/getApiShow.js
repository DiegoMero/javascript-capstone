import shoWUI from './showUI.js';

const url = 'https://api.tvmaze.com/shows';

const getApiShow = async () => {
  const resolve = await fetch(url);
  const result = await resolve.json();

  const limitLength = result.slice(0, 20);
  limitLength.forEach((element) => {
    if (element.image !== null) {
      shoWUI(element.name, element.image.medium);
    }
  });
};

export default getApiShow;
