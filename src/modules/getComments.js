const getComments = async (i) => {
  const resolve = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fyapNUEEWHEUs0ltmiAA/comments?item_id=${i}`);
  const comments = await resolve.json();
  console.log(comments);
  return comments;
};

export default getComments;