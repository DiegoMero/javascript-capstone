import getComments from './getComments.js';
import getNumberComments from './getNumberOfComments.js';

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

  const commentCounter = await getNumberComments(i);

  const commentTitle = document.createElement('h3');
  commentTitle.className = 'comments-title';
  commentTitle.textContent = `Comments (${commentCounter})`;
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

  const addCommentTitle = document.createElement('h4');
  addCommentTitle.textContent = 'Add a commment';
  addCommentTitle.className = 'add-comment-title';
  popupCard.appendChild(addCommentTitle);

  const commentsInput = document.createElement('div');
  commentsInput.className = 'comments-input';
  popupCard.appendChild(commentsInput);

  const nameInput = document.createElement('input');
  nameInput.className = 'name-input';
  nameInput.placeholder = 'Your name';
  commentsInput.appendChild(nameInput);

  const insightsInput = document.createElement('input');
  insightsInput.className = 'insights-input';
  insightsInput.placeholder = 'Your insights';
  commentsInput.appendChild(insightsInput);

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.className = 'comment-button';
  commentsInput.appendChild(commentButton);

  const clickToComment = document.querySelector('.comment-button');

  clickToComment.addEventListener('click', async (e) => {
    e.preventDefault();
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fyapNUEEWHEUs0ltmiAA/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: i,
        username: nameInput.value,
        comment: insightsInput.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};

export default popupCard;