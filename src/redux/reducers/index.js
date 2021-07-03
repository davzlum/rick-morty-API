import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import selectedDataReducer from './selectedDataReducer';

const rootReducer = combineReducers({
  apiData: dataReducer,
  selectedApiData: selectedDataReducer,
});

export default rootReducer;
