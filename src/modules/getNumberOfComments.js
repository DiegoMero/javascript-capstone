import getComments from './getComments.js';

const getNumberComments = async (i) => {
  let numberOfComments = await getComments(i);
  numberOfComments = numberOfComments.length;
  return numberOfComments;
};

export default getNumberComments;