import React, { Component } from 'react';
import ClickCounter from "../learning/hoc1";
import HoverCounter from "../learning/hoverCounter";
//import UpdatedComp from "../learning/hoc";


class HocParent extends Component {
    
   

    render() { 
       

        return ( 
            <div>
                <ClickCounter/>
                <HoverCounter/>
                {/* <UpdatedComp/> */}
                
            </div>
         );
    }
}
 
export default HocParent;