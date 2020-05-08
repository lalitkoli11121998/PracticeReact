import React from 'react';

//destructing the props like this
//const Greet = ({name,heroname}) => {

const Greet = props => {
   // we can also destructing like this of props
   const {name,heroname} = props;

   return(
    <div>
        <h1>hello {name} a.k.a  {heroname}</h1>
          
    </div>
   );
}
 export default Greet;


// export default function Great(){
//     //const [count,setcount] = useState(0);
//    return(
//     <div>
//         {/* <p>you click {count} times</p>
//         <button 
//          onClick = {()=> setcount(count +1)}
//         /> */}
//           <h1>hello lalit</h1>
//     </div>


//    );

// }
