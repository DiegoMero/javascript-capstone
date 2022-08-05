import getComments from './__mocks__/getComments.js';

const getNumberComments = async () => {
  let numberOfComments = await getComments();
  numberOfComments = numberOfComments.length;
  return numberOfComments;
};

export default getNumberComments;