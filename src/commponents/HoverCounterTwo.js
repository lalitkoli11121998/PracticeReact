import React, { Component } from 'react';

class HoverCounterTwo extends Component {

    render() {
        const{count,increamentCount} = this.props
        return (
            <div>
                <h2 onMouseOver={increamentCount}> Hover {count} times</h2>

            </div>
        );
    }
}

export default HoverCounterTwo;