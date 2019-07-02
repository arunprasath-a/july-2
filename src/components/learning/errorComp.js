import React from 'react';

const Herochild = ({heroname}) => {

    if(heroname === "joker"){
        throw new Error("not a hero")
    }
    return ( 
        <React.Fragment>
            <div>
         {heroname}
         </div>
        </React.Fragment>
     );
}
 
export default Herochild;