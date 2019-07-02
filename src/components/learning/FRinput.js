//import React, { Component } from 'react';
import React from 'react';
// class FrInp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <input type="text"></input>
//          );
//     }
// }

const FrInp = React.forwardRef((props,ref) =>{

    const{val}=props;
    
 return(
     <>
     <h1>{val}</h1>
    <input type="text" ref={ref}></input>
    </>
 )
})
 
export default FrInp;