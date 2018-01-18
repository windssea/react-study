import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/Button';


//无状态组件
function HelloComponent(props) {
  return <div>Hello {props.name}</div>  
}

//es6组件声明
class HelloComponent2 extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: props.name
    };
  }
 render() {
    return <div>Hello {this.state.name}</div>  
  }
}


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'test',
      name1:"无状态组件",
      name2:"标准组件",
    }
    this.clickDoSomething=this.clickDoSomething.bind(this);
  }

  clickDoSomething(){
    this.setState({
      name:'test2',
      name1:"无状态组件2",
      name2:"标准组件2",
    })
    console.log("dosomething");
  }
  render() {
    return (
      <div className="App">
        {this.state.name}
        <HelloComponent name={this.state.name1}/>
        <HelloComponent2  name={this.state.name2}/>
        <Button label="标准组件生成"   doSome={this.clickDoSomething}></Button>
      </div>
    );
  }
}

export default App;
