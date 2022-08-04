const getComments = async (i) => {
  const resolve = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fyapNUEEWHEUs0ltmiAA/comments?item_id=${i}`);
  const comments = await resolve.json();
  return comments;
};

export default getComments;