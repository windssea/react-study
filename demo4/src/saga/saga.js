import {call, put,takeLatest } from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';

export default  function* rootSaga() {
    yield [
        takeLatest('INCREMENT2', registerUserAsync),
        takeLatest('DECREMENT2', loginUserAsync)
      ];
    // let data = {
    //     name: 'test'
    // };
    // try {
    //     console.log('2222');
    //     //    const data = yield call(Api.fetchUser, action.payload.url);
    //     yield put({type: "FETCH_SUCCEEDED", data});
    // } catch (error) {
    //     yield put({type: "FETCH_FAILED", error});
    // }
}

function* registerUserAsync() {
    console.log(1111); 
    setTimeout(()=>{console.log(111122); }, 1000)
    yield put({type: "INCREMENT"});
}

function* loginUserAsync() {
    console.log(2222);
    yield put({type: "DECREMENT"});
    
}

// function* watchFetchData() {
//     yield * takeEvery('FETCH_REQUESTED', rootSaga)
// }