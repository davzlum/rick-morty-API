import actionTypes from '../actions/actionTypes';

function charactersReducer(characters = [], action) {
  if (action.type === actionTypes.LOAD_CHARACTERS) {
    return action.characters;
  }
  return characters;
}

export default charactersReducer;
