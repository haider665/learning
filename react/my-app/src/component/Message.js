import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: 'Subscribe'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render() {
        console.log("render method");
        console.log(this);

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message