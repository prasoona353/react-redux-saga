import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imageReducer';
import errorReducer from './errorReducer';


const rootReducer = combineReducers({
   isLoading: loadingReducer,images: imagesReducer,error : errorReducer
});

export default rootReducer;