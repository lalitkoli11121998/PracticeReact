    import React, { Component } from 'react';
    
    class EventBind extends Component {
       constructor(props){
           super(props)
           this.state = {
               message: "hello"
           }
           // third approach
        //    this.clickhandler = this.clickhandler.bind(this);
       }

    //    clickhandler(){
    //        this.setState({
    //            message:"good bye"
    //        })
    //      console.log(this)
    //    }

    //4th approach
    clickhandler = () =>{
        this.setState({
            message: "good bye"
        })
    }
        render() {
            return (
                <div>
                    <div>{this.state.message}</div>
                    {/* <button onClick = {this.clickhandler.bind(this)}>click</button> */}
                    {/*2nd approach  we can also use the arrow function */}
                    {/* <button onClick = {() => this.clickhandler()}> click</button> */}
                     {/* 3rd approach in which we bind this keyword in constructor */}
                     {/* <button onClick ={this.clickhandler}>click</button> */}
                     {/* 4th approach */}
                     <button onClick = {this.clickhandler}>click</button>
                </div>
            );
        }
    }
    
    export default EventBind;