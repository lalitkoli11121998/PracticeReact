import React, { Component } from 'react';

class ClassClick extends Component {

    handleclick(){
        console.log("handllcick");
        this.handleclick = this.handleclick.bind(this);
    }
    render() {
        return (
            <div>
                <button onClick = {() => this.handleclick()}>clicked</button>
            </div>
        );
    }
}

export default ClassClick;