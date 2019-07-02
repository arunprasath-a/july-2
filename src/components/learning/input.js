import React, { Component } from 'react';

class Inp extends Component {
    constructor(props) {
        super(props);
        this.inputRef= React.createRef();
    }

    focusInput=()=>{
        this.inputRef.current.focus();
    }


    render() { 
        return ( 
            <>
            <input ref={this.inputRef}></input>
            </>
         );
    }
}
 
export default Inp;