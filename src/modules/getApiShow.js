import popupCard from './popupCard.js';
import { addApiLikes, getApiLikes } from './addlikeapi.js';
import totalItems from './totalItems.js';

const url = 'https://api.tvmaze.com/shows';
const numberOfItems = document.querySelector('.totalitems');

const getApiShow = async () => {
  const resolve = await fetch(url);
  const result = await resolve.json();

  const limitLength = result.slice(0, 20);
  totalItems(limitLength.length, numberOfItems);
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
    pE2.textContent = '0 likes';

    getApiLikes(limitLength[i].name, pE2);

    iE1.addEventListener('click', () => {
      const { name } = limitLength[i];
      addApiLikes(name);
    });

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
      popupCard(limitLength, i);
    });
  }
};

export default getApiShow;