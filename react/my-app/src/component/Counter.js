import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increment(){
        // this.state.setState = {
        //     count: this.state.count + 1
        // }
        console.log('clicked');

        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log('callback: ' + this.state.count))

        this.setState(prevState => ({
            count: prevState.count + 1
        }))

        console.log('' + this.state.count);
    }

    incrementFivetimes(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        // console.log(this.state.count)
        return (
            <div>
                <h1>Count: ${this.state.count}</h1>
                <button onClick={() => this.incrementFivetimes()}>Increment</button>
            </div>
        )
    }
}

export default Counter