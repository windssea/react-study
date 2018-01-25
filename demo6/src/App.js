import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function getList() {
  fetch('/dingding/org/list.do', {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
      body: ""
    })
    .then(function (response) {
      if (response.status == 200) {
        return response;
      }
    })
    .then(function (data) {
      return data.json();;
    })
    .then(function (text) {
      console.log("请求成功，响应数据");
    })
    .catch(function (err) {
      console.log("Fetch错误:" + err);
    });
}

function getList2() {
   return fetch('/dingding/org/list.do', {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: "name=luwenjing&age=22"
  });
}


function runAsync1(){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('异步任务1执行完成');
          resolve('随便什么数据1');
      }, 1000);
  });
  return p;            
}

function runAsync2(){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('异步任务2执行完成');
          resolve('随便什么数据2');
      }, 2000);
  });
  return p;            
}

function runAsync3(data){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('异步任务3执行完成');
          if(data){
            resolve('随便什么数据3');
          }else{
            reject('拒绝测试');
          }
      }, 2000);
  });
  return p;            
}

var start1 = async function () {
  // 在这里使用起来就像同步代码那样直观
  console.log('start');
 var a = await setTimeout(function(){console.log("---")},5000)
  console.log('end'+a);
}; 


function *numbers() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
 // console.log('v1 = ' + v1);
  // yield 1;
 // console.log('v2 = ' + v2);
  // return 5;
}


class App extends Component {
  render() {

    var nums = numbers();

    start1();

    getList();

    console.log(111);
    getList2().then(function (response) {
       return response.json()
    }).then(function(data){
      console.log(data); 
    }) .catch(function (err) {
      console.log("Fetch错误:" + err);
    });;
    console.log(333);


    runAsync1().then((data)=>{
      console.log(data);
      return runAsync2();
    }).then((data)=>{
      console.log(data);
      return runAsync3(true);
    }).then((data)=>{
      console.log(data);
      return runAsync3(false);
    }).catch(function(reason){
       console.log(reason);
  });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
