import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  apiData: dataReducer,
});

export default rootReducer;
