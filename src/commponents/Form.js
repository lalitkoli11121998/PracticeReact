    import React, { Component } from 'react';
    
    class Form extends Component {
      constructor(props){
          super(props)

          this.state = {
              username: '',
              text: '',
              selt: ''
          }
      }
      onchangeinput = (e) =>{
          this.setState({
              username: e.target.value
          })
      }
      onchangetext = (e) =>{
        this.setState({
            text: e.target.value
        })
      }
      onselect = (e) =>{
          this.setState({
              selt : e.target.value
          })
      }

      handlesubmit = (e) => {
          alert(`${this.state.username} ${this.state.text} ${this.state.selt}`)
          e.preventDefault();
      }
        render() {
            return (
              <form onSubmit = {this.handlesubmit}>
                  <div>
                      <label>usrname</label>
                      <input value = {this.state.username} onChange = {this.onchangeinput}></input>
                  </div>
                  <div>
                      <label>enter text</label>
                      <textarea value = {this.state.text} onChange = {this.onchangetext}></textarea>
                  </div>
                  <div>
                      <label>select</label>
                      <select value  = {this.state.selt} onChange ={this.onselect}>
                          <option value = 'react'>React</option>
                          <option value = 'angular'>angular</option>
                          <option value = 'mongo'>mongo</option>
                      </select>
                  </div>
                   <div>
                       <button type = 'submit'>submit</button>
                   </div>
              </form>
            );
        }
    }
    
    export default Form;