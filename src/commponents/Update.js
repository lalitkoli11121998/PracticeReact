import React, { Component } from 'react';

class Update extends Component {
    static getDerivedStateFromProps(props, state){
          console.log("update getderived")
          return null

    }
    shouldComponentUpdate(){
        console.log("shoutuppdate update");
        return true;
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getsnapshot update")
        return null;
    }
    componentWillUpdate(){
        console.log("mount componentdidmount")
    }
    render() {
        console.log("render update")
        return (
            <div>
                <h1>hii</h1>
            </div>
        );
    }
}

export default Update;