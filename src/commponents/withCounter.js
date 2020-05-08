import React from 'react'
//this is hoc high order component which provide us the code optimizaiton so that the same functionality not be used again and again

const updatedComponent = (OriginalComponent,increamentnumber) =>{

    class NewComponent extends React.Component{

        constructor(props){
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        increamentCount =() =>{
            this.setState(prevState => {
                return{ count: prevState.count +increamentnumber }
            })
        }
        render(){
            return <OriginalComponent
             count = {this.state.count} 
             increamentCount = {this.increamentCount}
             {... this.props}/>
        }
    }
    return  NewComponent;
}

export default updatedComponent;