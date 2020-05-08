    import React, { Component } from 'react';
    
    class UserGreeting extends Component {

        constructor(props){
            super(props)

            this.state = {
                isloagged: false
            }
        }

        render() {
           return(
               this.state.isloagged ? (
               <div>welcome lalit</div>
               ) :(<div>welcome guest</div>
                )
            );
        //   if(this.state.isloagged){
        //     return (
        //         <div>
        //             <h1>hello lalit</h1>
        //         </div>
        //     );
        //   }else{
        //     return (
        //         <div>
        //             <h1>hello guest</h1>
        //         </div>
        //     );
        //   }
        }
    }
    
    export default UserGreeting;