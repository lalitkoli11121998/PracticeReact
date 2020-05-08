import React, { Component } from 'react';

class Refdemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();

        this.cbRef = null;
        this.setRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        if(this.cbRef){
            this.cbRef.focus();
        }
        //   this.inputRef.current.focus();
        // console.log(this.inputRef)
    }


    clickit = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setRef} />
                <button onClick={this.clickit}>click</button>
            </div>
        );
    }
}

export default Refdemo;