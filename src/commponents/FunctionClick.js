    import React from 'react';
    
    function FunctionClick(props) {

          function handleclick(){
              console.log("button clicked");
          }
        return (
            <div>
                <button onClick = {handleclick}>clicked</button>
            </div>
        );
    }
    
    export default FunctionClick;