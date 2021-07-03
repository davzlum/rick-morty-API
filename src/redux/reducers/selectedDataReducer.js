import actionTypes from '../actions/actionTypes';

function selectedDataReducer(selectedData = {}, action) {
  if (action.type === actionTypes.LOAD_SELECTED_DATA) {
    return action.selectedApiData;
  }
  return selectedData;
}

export default selectedDataReducer;
