    import React from 'react';
    

    const heading = {
        fontSize : '72px',
        color: 'blue'
    }
    function Inline(props) {
        return (
            <div>
                <h1 style = {heading} className ='error' >Inline</h1>
            </div>
        );
    }
    
    export default Inline;