import authors from "../data.js";

const initialState = {
  authors: authors,
  newAuthorId: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
