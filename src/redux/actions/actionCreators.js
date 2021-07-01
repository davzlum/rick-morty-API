import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'https://rickandmortyapi.com/api';

export function getApiData(section, page) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/${section}?page=${page}`);
      dispatch({
        type: actionTypes.LOAD_DATA,
        apiData: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_DATA_ERROR,
      });
    }
  };
}

export function getSelectedApiData(section, id) {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-debugger
      debugger;
      const { data } = await axios(`${url}/${section}/${id}`);
      dispatch({
        type: actionTypes.LOAD_SELECTED_DATA,
        selectedApiData: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_SELECTED_DATA_ERROR,
      });
    }
  };
}
