    import React from 'react';
import Person from './Person';
    
    function LIst(props) {

        const persons = [
            {
                id:1,
                name: 'lalit',
                age:20,
                skill: 'react'
            },
            {
                id:2,
                name: 'ramu',
                age:29,
                skill: 'angular'
            },
            {
                id:4,
                name: 'kavi',
                age:27,
                skill: 'react'
            }
        ]
        const names = ['lalit', 'lalit','harish', 'kavi']
        //key is a special prop which we included for given the list to other component but key can not be rendre in child component
        // const personlist = persons.map(name =>  <Person key = {name.id} name ={name}/>)
        //for unique key we use the index of the array
    const namelist  = names.map((name, index) => <h1 key ={index}>{index} {name}</h1>)
        return (
            <div>
                {namelist}
            </div>
        );
    }
    
    export default LIst;