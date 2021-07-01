import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'https://rickandmortyapi.com/api';

export default function getApiData(section) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/${section}`);
      dispatch({
        type: actionTypes.LOAD_DATA,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_DATA_ERROR,
      });
    }
  };
}
