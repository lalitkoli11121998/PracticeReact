import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }

    increase(){
        // this.setState(
        // {
        //     count: this.state.count +1
        // },()=>{
        //     console.log(this.state.count)
        // } )
        
        this.setState((prevState,props) => ({
            count: prevState.count +1
        }))
        console.log(this.state.count)
    }
    increatmentfive(){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }
    render() {
        return (
            <div>
                 <p>counter - {this.state.count}</p>
                 <button onClick ={()=> this.increatmentfive()}>click</button>
            </div>
        );
    }
}

export default Counter;