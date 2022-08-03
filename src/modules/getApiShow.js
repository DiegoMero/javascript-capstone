// import shoWUI from './showUI.js';

const url = 'https://api.tvmaze.com/shows';

const getApiShow = async () => {
  const resolve = await fetch(url);
  const result = await resolve.json();

  const limitLength = result.slice(0, 20);
  for (let i = 0; i < limitLength.length; i += 1) {
    const mainPage = document.querySelector('.main');
    const div1 = document.createElement('div');
    div1.className = 'card';
    const div2 = document.createElement('div');
    div2.className = 'image';
    const imgs = document.createElement('img');
    imgs.setAttribute('src', limitLength[i].image.medium);
    const div3 = document.createElement('div');
    div3.className = 'nameMovie';
    const pE1 = document.createElement('p');
    pE1.className = 'namedMovies';
    pE1.textContent = limitLength[i].name;
    const div4 = document.createElement('div');
    div4.className = 'likess';
    const iE1 = document.createElement('i');
    iE1.className = 'fa-regular fa-heart';
    const span1 = document.createElement('span');
    span1.className = 'numberLiked';
    const pE2 = document.createElement('p');
    pE2.className = 'likecount';
    pE2.textContent = 'likes';
    const div5 = document.createElement('div');
    div5.className = 'btnsComRres';
    const btn = document.createElement('button');
    btn.className = 'btnComment';
    btn.textContent = 'comment';
    div5.appendChild(btn);
    div4.append(iE1, span1, pE2);
    div3.append(pE1, div4);
    div2.appendChild(imgs);
    div1.append(div2, div3, div5);
    mainPage.appendChild(div1);

    let buttonComment = document.querySelectorAll('.btnComment');
    buttonComment = [...buttonComment];

    buttonComment[i].addEventListener('click', (e) => {
      e.preventDefault();
      const body = document.querySelector('body');
      const bigView = document.createElement('body');
      bigView.className = 'big-view-body';
      body.appendChild(bigView);

      const popupCard = document.createElement('div');
      popupCard.className = 'popupCard';
      bigView.appendChild(popupCard);

      const imgContainer = document.createElement('div');
      imgContainer.className = 'img-container';
      popupCard.appendChild(imgContainer);

      const movieImg = document.createElement('img');
      movieImg.setAttribute('src', limitLength[i].image.medium);
      imgContainer.appendChild(movieImg);

      const xIcon = document.createElement('i');
      xIcon.className = 'fa-solid fa-x';
      xIcon.addEventListener('click', () => { body.removeChild(bigView); });
      imgContainer.appendChild(xIcon);

      const movieTitle = document.createElement('h2');
      movieTitle.className = 'movie-title';
      movieTitle.textContent = limitLength[i].name;
      popupCard.appendChild(movieTitle);

      const descriptionContainer = document.createElement('div');
      descriptionContainer.className = 'description-container';
      popupCard.appendChild(descriptionContainer);

      const genres = document.createElement('p');
      genres.textContent = `Genres: ${limitLength[i].genres}.`;
      descriptionContainer.appendChild(genres);

      const premiered = document.createElement('p');
      premiered.textContent = `Premiered: ${limitLength[i].premiered}.`;
      descriptionContainer.appendChild(premiered);

      const language = document.createElement('p');
      language.textContent = `Language: ${limitLength[i].language}.`;
      descriptionContainer.appendChild(language);

      const ended = document.createElement('p');
      if (limitLength[i].ended === null) {
        ended.textContent = 'Ended: Still in tune.';
      } else {
        ended.textContent = `Ended: ${limitLength[i].ended}.`;
      }
      descriptionContainer.appendChild(ended);
    });
  }
};

export default getApiShow;
