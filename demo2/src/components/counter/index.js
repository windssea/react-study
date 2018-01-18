import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.incrementOdd=this.incrementOdd.bind(this);
        this.incrementAsync=this.incrementAsync.bind(this)
    }

    incrementOdd(){
        if(this.props.value%2==0){
            this.props.onIncrement();
        }
    }

    incrementAsync(){
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <p>
                    Clicked: {value}
                    times
                    <button onClick={onIncrement}>
                        +
                    </button>

                    <button onClick={onDecrement}>
                        -
                    </button>

                    <button onClick={this.incrementOdd}>
                        Increment if odd
                    </button>

                    <button onClick={this.incrementAsync}>
                        Increment async
                    </button>
                </p>
            </div>
        );
    }
}

export default Counter;