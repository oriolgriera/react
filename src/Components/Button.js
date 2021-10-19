import React, { Component } from 'react';

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {value:0};
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(event){
        this.setState({value: this.state.value + 1});
    }

    render(){
        return(
            <div>
                <button onClick={this.buttonClicked}>
                    Click
                </button>
                <div>
                    <p>You clicked {this.state.value} times</p>
                </div>
            </div>
        )
    }
}

export default Button;