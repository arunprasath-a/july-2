import React, { Component } from 'react';
import UpdatedComp from "../learning/hoc";

class HoverCounter extends Component {

    render() { 
        
        const {name,count,onInc} = this.props
        return ( 
            <div>
                <h1 onMouseOver={onInc}>{name} hovered {count} times</h1>
            </div>
         );
    }
}
 
export default UpdatedComp(HoverCounter,5);
// export default HoverCounter;