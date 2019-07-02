import React, { Component } from 'react';
// import HoverCounter from "../learning/hoverCounter";
// import ClickCounter from "../learning/hoc1"

const UpdatedComp = (OriginalComp,incNum)=>{
    class NewComp extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                count:0
             }
        }
    
        onInc = () =>{
            this.setState( prevstate =>{
                return {count:prevstate.count+incNum}
            })
        }

        render() { 
            return <OriginalComp name="arun" count={this.state.count} onInc={this.onInc}/>
        }
    }
     
    return NewComp;
}

export default UpdatedComp;