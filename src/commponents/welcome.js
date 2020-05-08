import React from 'react';

export default class Welcome extends React.Component{
    render(){
        //in class component we destructing in rendre method
        const {name,heroname} = this.props;
        // we can also destructing state in the class like this
        // const {state1 , state2} = this.state
        return(
        <h1>Welcome {name} a.k.a {heroname}</h1>
        );
    }
}