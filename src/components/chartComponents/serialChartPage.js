// import React from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadradarChartData } from "../../store/actions/actions";
// //import EnhancedComponent from "../HOC/index";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Table from 'react-bootstrap/Table';
// import "../../css/allCharts.css";
// import Loader from 'react-loader-spinner';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(am4themes_animated);


// class SerialChart extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {
//     this.props.loadradarChartData();
//   }

//   componentDidUpdate() {
//     var chart = am4core.create("Serieschartdiv", am4charts.RadarChart);
//     chart.data = this.props.data.data;

//     /* Create axes */
//     var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "country";
//     categoryAxis.renderer.labels.template.location = 0.5;

//     var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//     valueAxis.renderer.labels.template.location = 1;
//     valueAxis.renderer.labels.template.verticalCenter = "bottom";
//     valueAxis.renderer.labels.template.fillOpacity = 0.5;
//     valueAxis.renderer.maxLabelPosition = 0.99;

//     /* Create and configure series */
//     var series1 = chart.series.push(new am4charts.RadarColumnSeries());
//     series1.dataFields.valueY = "value1";
//     series1.dataFields.categoryX = "country";
//     series1.name = "Sales";
//     series1.strokeWidth = 0;
//     series1.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
//     series1.sequencedInterpolation = true;
//     series1.sequencedInterpolationDelay = 100;
//     series1.stacked = true;

//     var series2 = chart.series.push(new am4charts.RadarColumnSeries());
//     series2.dataFields.valueY = "value2";
//     series2.dataFields.categoryX = "country";
//     series2.name = "Marketing";
//     series2.strokeWidth = 0;
//     series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
//     series2.sequencedInterpolation = true;
//     series2.sequencedInterpolationDelay = 100;
//     series2.stacked = true;

//     /* Add legend */
//     chart.legend = new am4charts.Legend();

//     /* Add cursor */
//     chart.cursor = new am4charts.RadarCursor();

//     /* Make chart angled */
//     chart.startAngle = -170;
//     chart.endAngle = -10;
//     chart.innerRadius = am4core.percent(50);
//   }

//   componentWillUnmount() {
//     if (this.chart) {
//       this.chart.dispose();
//     }
//   }


//   onSwap() {
//     this.setState({
//       count: this.state.count + 1
//     })
//     if (this.state.count % 2 === 0) {
//       document.getElementById("radatTable").style.display = "block";
//       document.getElementById("radarChart").style.display = "none";
//     } else {
//       document.getElementById("radatTable").style.display = "none";
//       document.getElementById("radarChart").style.display = "block";
//     }
//   }

//   render() {

//     if (this.props.data.data) {
//       return (
//         <React.Fragment>
//           <div className="radar chart">

//             <div className="Serieschartdiv" id="radarChart"></div>
//             {/* <br></br> */}

//             {/* <h3>Radar chart</h3> */}
//             <div id="radatTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//               <Table striped bordered hover>
//                 <thead style={{backgroundColor:"black",color:"white"}}>
//                   <tr>
//                     <th>Country</th>
//                     <th>value 1</th>
//                     <th>value 2</th>
//                   </tr>
//                 </thead>
//                 <tbody>{this.props.data.data.map((item,index) => {
//                   return (
//                     <tr key={"tr"+index}>
//                       <td key={"td1"+index}>{item.country}</td>
//                       <td key={"td2"+index}>{item.value1}</td>
//                       <td key={"td3"+index}>{item.value2}</td>
//                     </tr>

//                   )
//                 })}

//                 </tbody>
//               </Table>
//             </div>
//             <hr></hr>
//             <Container>
//               <Row>
//                 <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                 <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                 <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwap.bind(this)}>Swap</button></Col>
//               </Row>
//             </Container>
//           </div>
//         </React.Fragment>
//       )
//     } else {
//       return (<div className="loaderDiv"><Loader
//         type="ThreeDots"
//         color="#00BFFF"
//         height="100"
//         width="100"
//       /></div>)
//     }

//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     data: state.mainReducer.radarchartData
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     loadradarChartData: loadradarChartData,
//   }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)((SerialChart));



//method 2 with HOC
import React from 'react';

import MyHOC from "../HOC/newHOC";
//import EnhancedComponent from "../HOC/index";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import "../../css/allCharts.css";
// import Loader from 'react-loader-spinner';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


class SerialChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

 

  componentDidMount() {
    var chart = am4core.create("Serieschartdiv", am4charts.RadarChart);
    chart.data = this.props.radarchartData;

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.location = 0.5;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.location = 1;
    valueAxis.renderer.labels.template.verticalCenter = "bottom";
    valueAxis.renderer.labels.template.fillOpacity = 0.5;
    valueAxis.renderer.maxLabelPosition = 0.99;

    /* Create and configure series */
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.categoryX = "country";
    series1.name = "Sales";
    series1.strokeWidth = 0;
    series1.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series1.sequencedInterpolation = true;
    series1.sequencedInterpolationDelay = 100;
    series1.stacked = true;

    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.categoryX = "country";
    series2.name = "Marketing";
    series2.strokeWidth = 0;
    series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series2.sequencedInterpolation = true;
    series2.sequencedInterpolationDelay = 100;
    series2.stacked = true;

    /* Add legend */
    chart.legend = new am4charts.Legend();

    /* Add cursor */
    chart.cursor = new am4charts.RadarCursor();

    /* Make chart angled */
    chart.startAngle = -170;
    chart.endAngle = -10;
    chart.innerRadius = am4core.percent(50);
  }

 

  onSwap() {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count % 2 === 0) {
      document.getElementById("radatTable").style.display = "block";
      document.getElementById("radarChart").style.display = "none";
    } else {
      document.getElementById("radatTable").style.display = "none";
      document.getElementById("radarChart").style.display = "block";
    }
  }

  render() {


      return (
        <React.Fragment>
          <div className="radar chart">

            <div className="Serieschartdiv" id="radarChart"></div>
            {/* <br></br> */}

            {/* <h3>Radar chart</h3> */}
            <div id="radatTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

              <Table striped bordered hover>
                <thead style={{backgroundColor:"black",color:"white"}}>
                  <tr>
                    <th>Country</th>
                    <th>value 1</th>
                    <th>value 2</th>
                  </tr>
                </thead>
                <tbody>{this.props.radarchartData.map((item,index) => {
                  return (
                    <tr key={"tr"+index}>
                      <td key={"td1"+index}>{item.country}</td>
                      <td key={"td2"+index}>{item.value1}</td>
                      <td key={"td3"+index}>{item.value2}</td>
                    </tr>

                  )
                })}

                </tbody>
              </Table>
            </div>
            <hr></hr>
            <Container>
              <Row>
                <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
                <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
                <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwap.bind(this)}>Swap</button></Col>
              </Row>
            </Container>
          </div>
        </React.Fragment>
      )
    } 

}




export default MyHOC(SerialChart);

