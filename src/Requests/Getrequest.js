import React, { Component } from 'react';
import axios from 'axios';
class Getrequest extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        // get request and axois is promise request so we can use than
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
              console.log("result of response",response)
              this.setState({
                  posts: response.data,
                  
              })
        })
        .catch(error => {
            console.log("error occurence",error)
            this.setState({
                errorMsg: 'error in retreiving data'
            })
        })
    }
    render() {
        const{posts,errorMsg} = this.state
        return (
            <div>
                list of posts
             {
                posts.length ? 
                posts.map(post => <div key ={post.id}> {post.title} </div>):
                null
             }
             {
                 errorMsg ? <div> {errorMsg}</div> : null
             }
             </div>
        );
    }
}

export default Getrequest;