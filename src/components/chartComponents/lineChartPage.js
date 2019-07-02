// import React from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadlineChartData } from "../../store/actions/actions";
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


// class LineChart extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {

//     this.props.loadlineChartData();
//   }


//   componentDidUpdate() {
//     var chart = am4core.create("linechartdiv", am4charts.XYChart);
//     chart.paddingRight = 20;


//     chart.data = this.props.data.data;

//     // Create axes
//     var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "year";
//     categoryAxis.renderer.minGridDistance = 50;
//     categoryAxis.renderer.grid.template.location = 0.5;
//     categoryAxis.startLocation = 0.5;
//     categoryAxis.endLocation = 0.5;

//     // Pre zoom
//     chart.events.on("datavalidated", function () {
//       categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
//     });

//     // Create value axis
//     var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//     valueAxis.baseValue = 0;

//     // Create series
//     var series = chart.series.push(new am4charts.LineSeries());
//     series.dataFields.valueY = "value";
//     series.dataFields.categoryX = "year";
//     series.strokeWidth = 2;
//     series.tensionX = 0.77;

//     var range = valueAxis.createSeriesRange(series);
//     range.value = 0;
//     range.endValue = 1000;
//     range.contents.stroke = am4core.color("#FF0000");
//     range.contents.fill = range.contents.stroke;

//     // Add scrollbar
//     var scrollbarX = new am4charts.XYChartScrollbar();
//     scrollbarX.series.push(series);
//     chart.scrollbarX = scrollbarX;

//     chart.cursor = new am4charts.XYCursor();

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
//       document.getElementById("lineTable").style.display = "block";
//       document.getElementById("lineChart").style.display = "none";
//     } else {
//       document.getElementById("lineTable").style.display = "none";
//       document.getElementById("lineChart").style.display = "block";
//     }
//   }

//   render() {

//     if (this.props.data.data) {
//       return (
//         <React.Fragment>
//           <div className="line chart">


//             <div className="linechartdiv" id="lineChart"></div>
//             {/* <br></br> */}

//             {/* <h3>Line chart</h3> */}
//             <div id="lineTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//               <Table striped bordered hover>
//                 <thead style={{backgroundColor:"black",color:"white"}}>
//                   <tr>
//                     <th>Year</th>
//                     <th>Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>{this.props.data.data.map((item,index) => {
//                   return (
//                     <tr key={"tr"+index}>
//                       <td key={"td1"+index}>{item.year}</td>
//                       <td key={"td2"+index}>{item.value}</td>
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
//     data: state.mainReducer.linechartData,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     loadlineChartData: loadlineChartData,
//   }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)((LineChart));


//method 2
import React from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadlineChartData } from "../../store/actions/actions";
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


class LineChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }




  componentDidMount() {
    var chart = am4core.create("linechartdiv", am4charts.XYChart);
    chart.paddingRight = 20;


    chart.data = this.props.linechartData;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Pre zoom
    chart.events.on("datavalidated", function () {
      categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
    });

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    var range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = 1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();

  }

 

  onSwap() {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count % 2 === 0) {
      document.getElementById("lineTable").style.display = "block";
      document.getElementById("lineChart").style.display = "none";
    } else {
      document.getElementById("lineTable").style.display = "none";
      document.getElementById("lineChart").style.display = "block";
    }
  }

  render() {

      return (
        <React.Fragment>
          <div className="line chart">


            <div className="linechartdiv" id="lineChart"></div>
            {/* <br></br> */}

            {/* <h3>Line chart</h3> */}
            <div id="lineTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

              <Table striped bordered hover>
                <thead style={{backgroundColor:"black",color:"white"}}>
                  <tr>
                    <th>Year</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>{this.props.linechartData.map((item,index) => {
                  return (
                    <tr key={"tr"+index}>
                      <td key={"td1"+index}>{item.year}</td>
                      <td key={"td2"+index}>{item.value}</td>
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





export default MyHOC(LineChart);
