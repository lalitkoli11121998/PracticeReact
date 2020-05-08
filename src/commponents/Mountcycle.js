import React, { Component } from 'react';

class Mountcycle extends Component {

    constructor(props){
        super(props)
          console.log("mount constructor")
        this.state = {
            usr : 'lalit'
        }
    }

    static getDerivedStateFromProps(props, state){
          console.log("mount getderived")
          return null

    }
    componentDidMount(){
        console.log("mount componentdidmount")
    }
    render() {
        console.log("render mount")
        return (
            <div>
                <h1>hii</h1>
            </div>
        );
    }
}

export default Mountcycle;