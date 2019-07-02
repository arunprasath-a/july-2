import React, { Component } from 'react';
import FrInp from "../learning/FRinput";

class FRParent extends Component {
    constructor(props) {
        super(props);
        this.inpRef = React.createRef();
    }

    clickHandler = () =>{
        this.inpRef.current.focus();
    }

    render() { 
        return ( 
            <>
            <FrInp ref={this.inpRef} val="Forwarding Refs"/>
            <button onClick={this.clickHandler}>focus input</button>
            </>
         );
    }
}
 
export default FRParent;