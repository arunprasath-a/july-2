import React, { Component } from 'react';
import Inp from "../learning/input";

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.compRef= React.createRef();
    }

    clickHandler =() =>{
        this.compRef.current.focusInput();
    }

    render() { 
        return ( 
            <>
            <Inp ref={this.compRef}>test</Inp>
            <button onClick={this.clickHandler}>Focus Input</button>
            </>
         );
    }
}
 
export default FocusInput;