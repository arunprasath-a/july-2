
// //method 1: whithout HOC

// import React from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadPiChartData } from "../../store/actions/actions";
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



// class PiChart extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//           count: 0
//         }
//       }


//     componentDidMount() {
//         this.props.loadPiChartData();
//     }


//     componentDidUpdate() {
//         var chart = am4core.create("Pichartdiv", am4charts.PieChart);
//         chart.data = this.props.data.data;
//         var pieSeries = chart.series.push(new am4charts.PieSeries());
//         pieSeries.dataFields.value = "litres";
//         pieSeries.dataFields.category = "country";
//     }

//     componentWillUnmount() {
//         if (this.chart) {
//           this.chart.dispose();
//         }
//       }

//       onSwap() {
//         this.setState({
//           count: this.state.count + 1
//         })
//         if (this.state.count % 2 === 0) {
//           document.getElementById("piTable").style.display = "block";
//           document.getElementById("piChart").style.display = "none";
//         } else {
//           document.getElementById("piTable").style.display = "none";
//           document.getElementById("piChart").style.display = "block";
//         }
//       }

//     render() {

//         if (this.props.data.data) {
//             return (
//                 <React.Fragment>
//                     <div className="pi chart">
//                         <div className="Pichartdiv" id="piChart"></div>
//                         {/* <br></br> */}

//                         {/* <h3>pi chart</h3> */}
//                         <div id="piTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//               <Table striped bordered hover>
//                 <thead style={{backgroundColor:"black",color:"white"}}>
//                   <tr>
//                     <th key="country">Country</th>
//                     <th key="litres">Litres</th>
//                   </tr>
//                 </thead>
//                 <tbody>{this.props.data.data.map((item,index) => {
//                   return (
//                     <tr key={"tr"+index}>
//                       <td key={"td1"+index}>{item.country}</td>
//                       <td key={"td2"+index}>{item.litres}</td>
//                     </tr>

//                   )
//                 })}

//                 </tbody>
//               </Table>
//             </div>
//                         <hr></hr>
//                         <Container>
//                             <Row>
//                                 <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwap.bind(this)}>Swap</button></Col>
//                             </Row>
//                         </Container>
//                     </div>

//                 </React.Fragment>
//             )
//         } else {
//             return (<div className="loaderDiv"><Loader
//                 type="ThreeDots"
//                 color="#00BFFF"
//                 height="100"
//                 width="100"
//             /></div>)
//         }

//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         data: state.mainReducer.pichartData,
//         errMessage: state.mainReducer.errMessage
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         loadPiChartData: loadPiChartData,
//     }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)((PiChart));



///test
//method 2: HOC implemented


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



class PiChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
      }


  


    componentDidMount() {
        var chart = am4core.create("Pichartdiv", am4charts.PieChart);
        chart.data = this.props.pichartData;
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
    }



      onSwap() {
        this.setState({
          count: this.state.count + 1
        })
        if (this.state.count % 2 === 0) {
          document.getElementById("piTable").style.display = "block";
          document.getElementById("piChart").style.display = "none";
        } else {
          document.getElementById("piTable").style.display = "none";
          document.getElementById("piChart").style.display = "block";
        }
      }

    render() {

   
            return (
                <React.Fragment>
                    <div className="pi chart">
                        <div className="Pichartdiv" id="piChart"></div>
                        {/* <br></br> */}

                        {/* <h3>pi chart</h3> */}
                        <div id="piTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

              <Table striped bordered hover>
                <thead style={{backgroundColor:"black",color:"white"}}>
                  <tr>
                    <th key="country">Country</th>
                    <th key="litres">Litres</th>
                  </tr>
                </thead>
                <tbody>{this.props.pichartData.map((item,index) => {
                  return (
                    <tr key={"tr"+index}>
                      <td key={"td1"+index}>{item.country}</td>
                      <td key={"td2"+index}>{item.litres}</td>
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




export default MyHOC(PiChart);
