import React, { Component } from 'react';
import UpdatedComponent  from './withCounter'
class HoverCounter extends Component {

    render() {
        const{count, increamentCount} = this.props;
        return (
            <div>
                <h2 onMouseOver = {increamentCount}>{this.props.name} Hover {count} times</h2>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter,10);