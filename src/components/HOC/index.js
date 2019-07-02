import React from "react";
//import { bindActionCreators } from 'redux';
//import { onLogOut, loadAgGridData,loadPiChartData,loadbarChartData,loadlineChartData,loadradarChartData} from "../../store/actions/actions";
//import { connect } from "react-redux";
// /import AboutUsPageComponent from "../aboutpage";


const EnhancedComponent = (WrappedComponent) =>{
    class NewComponent extends React.Component{
       
        render(){
           return <WrappedComponent       
            {...this.props}/>
        }
       

    }

    return (NewComponent);
}

export default EnhancedComponent;