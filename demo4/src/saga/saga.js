import {call, put,takeLatest } from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';

export default  function* rootSaga() {
    yield [
        takeLatest('INCREMENT2', registerUserAsync),
        takeLatest('DECREMENT2', loginUserAsync)
      ];
}

function* registerUserAsync() {
    const data= yield call(getName);
    yield put({type: "INCREMENT",payload:{staff:data}});
}

function* loginUserAsync() {
    const data= yield call(getName2);
    yield put({type: "DECREMENT",payload:{staff:data}});
    
}

function getName2() {
    return {name:'test2'} ;
}
 

function getName() {
    console.log('开始请求...');
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('请求结束');
            resolve( {name:'test'});
        }, 3000)
    }); 
}