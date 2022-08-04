import getComments from './getComments.js';

const popupCard = async (limitLength, i) => {
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

  const commentTitle = document.createElement('h3');
  commentTitle.className = 'comments-title';
  commentTitle.textContent = 'Comments';
  popupCard.appendChild(commentTitle);

  const commentsContainer = document.createElement('ul');
  commentsContainer.className = 'comments-container';
  popupCard.appendChild(commentsContainer);
  const comments = await getComments(i);
  for (let i = 0; i < comments.length; i += 1) {
    const commentText = document.createElement('li');
    commentsContainer.appendChild(commentText);
    commentText.textContent = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
  }
};

export default popupCard;