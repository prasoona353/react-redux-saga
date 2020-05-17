import {takeEvery} from 'redux-saga/effects';
// import { IMAGES } from '../constants';
import IMAGES from '../constants'

function* workerSaga(){
    yield console.log('hellooo')
}


function* rootSaga(){
    console.log(IMAGES,'ERTYUIOP')
    yield takeEvery(IMAGES.LOAD, workerSaga)
}

export default rootSaga;