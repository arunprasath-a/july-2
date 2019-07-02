import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
//import { Prompt } from "react-router-dom";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import PiChart from "../components/chartComponents/piChartPage";
import BarChart from "../components/chartComponents/barChartPage";
import LineChart from "../components/chartComponents/lineChartPage";
import SerialChart from "../components/chartComponents/serialChartPage";
import { onLogOut } from "../store/actions/actions";
//import EnhancedComponent from "./HOC/index";
//import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
//import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../css/aMchartsPage.css";
//import { Container, Row, Col } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//am4core.useTheme(am4themes_animated);


class AmChartsComponent extends React.Component {




    render() {


   
            return (
                <React.Fragment>
                    {/* <Prompt when={true} message={"Are you sure want to redirect ?"} ></Prompt> */}
    
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="#" >Welcome {sessionStorage.getItem("name")} !</NavbarBrand>
    
                        <Nav className=" ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/About/"  ><Button color="link">Back</Button></NavLink>
                            </NavItem>
                        </Nav>
    
                        <Nav>
                            <NavItem>
                                <NavLink to="/" onClickCapture={() => sessionStorage.removeItem("name")} ><Button onClick={this.props.onLogOut} color="link">Log Out</Button></NavLink>
                            </NavItem>
    
                        </Nav>
    
    
                    </Navbar>
    
    
                    <hr />
    
    
                    <Container fluid={true}>
    
                        <div className="div1">
                        <Row>
                            <Col xs="6">
                                <PiChart className="pichartClass" />
                                                                
                            </Col>
    
                            <Col xs="6">
                                <BarChart className="BarchartClass" />
                            </Col>
    
                        </Row>
                        </div>
    
                        <div className="div2">
                        <Row>
                            <Col xs="6">
                                <LineChart className="LinechartClass" />
                            </Col>
                            <Col xs="6">
                                <SerialChart className="SerialchartClass" />
                            </Col>
                        </Row>
                        </div>
                        <hr></hr>
                       
    
                    </Container >
    
                </React.Fragment>
            )
       
}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onLogOut: onLogOut,
    }, dispatch)
}

const mapStateToProps=(state)=>{
    return{
        
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)((AmChartsComponent));










