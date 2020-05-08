    import React, { Component } from 'react';
import ChiledComponent from './ChiledComponent';
    
    class Parentcomponent extends Component {

       constructor(props){
           super(props)
           this.state = {
               parentname : "parent"
           }
           this.greatparent = this.greatparent.bind(this);
       }

       greatparent(childname){
           alert(`hello ${this.state.parentname} from ${childname}`)
       }
        render() {
            return (
                <div>
                    {/* in this we passing the reference of the greatparent method to the props which can be used anywhere 
                    in our case we use in the ChiledComponent */}
                    <ChiledComponent greathandler = {this.greatparent}></ChiledComponent>
                </div>
            );
        }
    }
    
    export default Parentcomponent;