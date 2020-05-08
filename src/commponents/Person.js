    import React from 'react';
    
    function Person({name}) {
        return (
            <div>
                 {/* <h1>i am {name.id}, i am {name.age} , year old {name.skill}</h1> */}
                  <h1>{name}</h1>
            </div>
        );
    }
    
    export default Person;