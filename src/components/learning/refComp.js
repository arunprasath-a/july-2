import React, { Component } from 'react';

class RefComp extends Component {
    constructor(props) {
        super(props);
        
        this.inpRef = React.createRef();
    }

componentDidMount() {
    this.inpRef.current.focus();
}

clickHandler =() =>{
    // /this.inpRef.current.focus();
    alert(this.inpRef.current.value)
}

    render() { 
        return ( 
            <React.Fragment>
                <input ref={this.inpRef}></input>
                <button onClick={this.clickHandler}>Click!</button>
            </React.Fragment>
         );
    }
}
 
export default RefComp;