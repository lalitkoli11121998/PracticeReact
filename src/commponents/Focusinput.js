    import React, { Component } from 'react';
    import Input from './Input'
    class Focusinput extends Component {
        constructor(props){
            super(props)
            this.componentRef = React.createRef();
        }
        clickhandler = ()=>{
            this.componentRef.current.focusinput();
        }
        render() {
            return (
                <div>
                    {/* the ref has all the property of input child class so we copy the property in out componentRef and use it */}
                    <Input ref = {this.componentRef}></Input>
                    <button onClick = {this.clickhandler}>focus Input</button>
                </div>
            );
        }
    }
    
    export default Focusinput;