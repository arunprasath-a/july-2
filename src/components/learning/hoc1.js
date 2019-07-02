import React, { Component } from 'react';
import UpdatedComp from "../learning/hoc";

class ClickCounter extends Component {
   

    render() { 
        
        const {name,count,onInc} = this.props

        return ( 
            <div>
                <button onClick={onInc}> {name} clicked {count} times</button>
            </div>
         );
    }
}
 
export default UpdatedComp(ClickCounter,10);
// export default ClickCounter;