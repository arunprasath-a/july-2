import React from 'react';
import Herochild from "./errorComp";
import ErrorBoundry from "../learning/errorBoundry";


const Hero = () => {
    return ( 
        <React.Fragment>
            <div>
        <ErrorBoundry>
        <Herochild heroname="ironman"/>
        </ErrorBoundry>

        <ErrorBoundry>
        <Herochild heroname="batman"/>
        
        </ErrorBoundry>

        <ErrorBoundry>
        <Herochild heroname="superman"/>
        
        </ErrorBoundry>

        <ErrorBoundry>
        <Herochild heroname="joker"/>
        </ErrorBoundry>
        </div>
        </React.Fragment>
     );
}
 
export default Hero;