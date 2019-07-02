import React, { Component } from 'react';
import MyHOC from "../test/HOC";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


class TestHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidUpdate() {
        var chart = am4core.create("Pichartdiv", am4charts.PieChart);
        chart.data = this.props.pichartData;
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
    }
  
       render() { 
      
        return ( 
            <React.Fragment>
                <h1>test component for HOC</h1>
                <p>{this.props.data}</p>
                <div>
                <div className="Pichartdiv" id="piChart"></div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MyHOC(TestHOC);