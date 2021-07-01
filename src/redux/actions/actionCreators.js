import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'https://rickandmortyapi.com/api';

export default function getApiData(section, page) {
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
