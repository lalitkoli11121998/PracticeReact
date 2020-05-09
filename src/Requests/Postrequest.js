    import React, { Component } from 'react';
    import axios from 'axios';
    class Postrequest extends Component {

         constructor(props){
             super(props)

             this.state={
                 userId: '',
                 title : '',
                 body: ''
             }
         }

         changehandler = (e) =>{
                 
                this.setState({[e.target.name]: e.target.value})
         }
        submithandler = e => {
    
            axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response =>{
                console.log('response' ,response)
            })
            .catch(error => {
                console.log(error)
            })    
        }


        render() {
            const {userId, title,body} = this.state;
            return (
                <div>
                    <from>
                        <div>
                        <input type ='text' name ='userId'value = {userId} onChange ={this.changehandler}></input>
                        </div>
                        <div>
                        <input type ='text' name ='title' value = {title} onChange ={this.changehandler}></input>
                        </div>
                        <div>
                        <input type ='text' name ='body' value = {body} onChange ={this.changehandler}></input>
                        </div>

                        <button onClick = {this.submithandler}>Submit</button>
                    </from>
                </div>
            );
        }
    }
    
    export default Postrequest;