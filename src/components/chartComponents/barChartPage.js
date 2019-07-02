// import React from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadbarChartData } from "../../store/actions/actions";
// //import EnhancedComponent from "../HOC/index";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Table from 'react-bootstrap/Table';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';

// //import "../../css/allCharts.css";
// import Loader from 'react-loader-spinner';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(am4themes_animated);



// class BarChart extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }


//   componentDidMount() {

//     this.props.loadbarChartData();

//   }

//   componentDidUpdate() {

//     var chart = am4core.create("Barchartdiv", am4charts.XYChart);


//     chart.data = this.props.data.data;

//     var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "country";
//     categoryAxis.renderer.grid.template.location = 0;
//     categoryAxis.renderer.minGridDistance = 30;


//     //here 2 is chaged to 3
//     categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
//       if (target.dataItem && target.dataItem.index & 2 == 2) {
//         return dy + 25;
//       }
//       return dy;
//     });

//     //this line has been commented coz it has not been used 
//     var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

//     // Create series
//     var series = chart.series.push(new am4charts.ColumnSeries());
//     series.dataFields.valueY = "visits";
//     series.dataFields.categoryX = "country";
//     series.name = "Visits";
//     series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
//     series.columns.template.fillOpacity = .8;

//     var columnTemplate = series.columns.template;
//     columnTemplate.strokeWidth = 2;
//     columnTemplate.strokeOpacity = 1;


 
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
//       document.getElementById("barTable").style.display = "block";
//       document.getElementById("barChart").style.display = "none";
//     } else {
//       document.getElementById("barTable").style.display = "none";
//       document.getElementById("barChart").style.display = "block";
//     }
//   }

//   render() {
//    // console.log(this.props.data.data);



//     if (this.props.data.data) {
//       return (
//         <React.Fragment>

//           <div className="bar chart">

//             <div className="Barchartdiv" id="barChart"></div>
//             {/* <br></br> */}
//             {/* <h3>bar chart</h3> */}

//             <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//               <Table striped bordered hover>
//                 <thead style={{backgroundColor:"black",color:"white"}}>
//                   <tr>
//                     <th>Country</th>
//                     <th>Visits</th>
//                   </tr>
//                 </thead>
//                 <tbody>{this.props.data.data.map((item,index) => {
//                   return (
//                     <tr key={"tr"+index}>
//                       <td key={"td1"+index}>{item.country}</td>
//                       <td key={"td2"+index}>{item.visits}</td>
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
//     data: state.mainReducer.barchartData,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     loadbarChartData: loadbarChartData,
//   }, dispatch)
// }



// export default connect(mapStateToProps, mapDispatchToProps)((BarChart));


//method 2:with HOC
import React from 'react';

import MyHOC from "../HOC/newHOC";
//import EnhancedComponent from "../HOC/index";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import "../../css/allCharts.css";
//import Loader from 'react-loader-spinner';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);



class BarChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }




  componentDidMount() {

    var chart = am4core.create("Barchartdiv", am4charts.XYChart);


    chart.data = this.props.barchartData;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;


    //here 2 is chaged to 3
    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
      if (target.dataItem && target.dataItem.index & 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    //this line has been commented coz it has not been used 
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;


 
  }



  onSwap() {
    this.setState({
      count: this.state.count + 1
    })

    if (this.state.count % 2 === 0) {
      document.getElementById("barTable").style.display = "block";
      document.getElementById("barChart").style.display = "none";
    } else {
      document.getElementById("barTable").style.display = "none";
      document.getElementById("barChart").style.display = "block";
    }
  }

  render() {

      return (
        <React.Fragment>

          <div className="bar chart">

            <div className="Barchartdiv" id="barChart"></div>
            {/* <br></br> */}
            {/* <h3>bar chart</h3> */}

            <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

              <Table striped bordered hover>
                <thead style={{backgroundColor:"black",color:"white"}}>
                  <tr>
                    <th>Country</th>
                    <th>Visits</th>
                  </tr>
                </thead>
                <tbody>{this.props.barchartData.map((item,index) => {
                  return (
                    <tr key={"tr"+index}>
                      <td key={"td1"+index}>{item.country}</td>
                      <td key={"td2"+index}>{item.visits}</td>
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






export default MyHOC(BarChart);
