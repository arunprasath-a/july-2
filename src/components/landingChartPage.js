import React from 'react';
import EnhancedComponent from "./HOC/index";
import AmChartsComponent from "./aMchartsPage";

import "../css/landingchart.css"
import { connect } from "react-redux";

const ChartComp =EnhancedComponent(AmChartsComponent)



class LandingChart extends React.Component {

      render() {

        
        return (
            <React.Fragment >

               <ChartComp/>
               
            </React.Fragment>
        )
   
       
    }
}


const mapStateToProps =(state)=>{
    return{
        isLoading:state.mainReducer.isLoading
    }
}


export default connect(mapStateToProps)(LandingChart);


