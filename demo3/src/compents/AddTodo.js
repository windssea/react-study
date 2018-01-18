import React, {Component} from 'react';

class AddTodo extends Component {

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
      }
      
    render() {
        return (
            <div>
                <div>
                    <input type='text' ref='input'/>
                    <button onClick={(e) => this.handleClick(e)}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default AddTodo;