import React from 'react';
import EnhancedComponent from "./HOC/index";
import AboutUsPageComponent from "./aboutpage";


const TableComp =EnhancedComponent(AboutUsPageComponent)

class LandingTable extends React.Component {

    render() {

        return (

            <React.Fragment >
                
                <TableComp/>
                                
            </React.Fragment>
        )
    }
}



export default (LandingTable);


