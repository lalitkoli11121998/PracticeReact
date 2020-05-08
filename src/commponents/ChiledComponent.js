    import React from 'react';
    
    function ChiledComponent(props) {
        return (
            <div>
                <button onClick = {() => props.greathandler("childnname")}>great parent</button>
            </div>
        );
    }
    
    export default ChiledComponent;