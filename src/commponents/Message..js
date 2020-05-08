import React from 'react';

export default class Message extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message: "welcome visitors"
        }
    }

    changemessageg(){
        this.setState({
            message: "please subscirbe to channel"
        })
    }
        
    render(){
        return(
             <div>
                  <h1>{this.state.message}</h1>
                   <button onClick ={()=> this.changemessageg()}>click</button>
             </div>
        );
    }
}