import React, {
    Component
} from 'react';

import styles  from './Button.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label:  props.label?props.label:"按钮",
            type: props.type,
            // doSome:props.doSome
        };
        this.onClick=this.onClick.bind(this);
    }

    onClick(){
        this.props.doSome();
    }

    componentWillMount() {
        console.log("准备初始化");
    }

    componentDidMount() {
        console.log("初始化完成");
        // this.setState((prevState,props) => {
        //     return {label:"test"};
        // });
    }

    shouldComponentUpdate() {
        console.log("更新判断");
        return true;
    }

    componentWillUpdate() {
        console.log("准备更新");
    }

    componentDidUpdate() {
        console.log("更新完成");
    }
    render() {
        return ( <input type = "button" onClick={this.onClick} className={ styles.info } value ={this.state.label}/> );
    }
}

export default Button;