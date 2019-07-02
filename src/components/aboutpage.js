import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
//import { Prompt } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
//import EnhancedComponent from "./HOC/index";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { onLogOut, loadAgGridData } from "../store/actions/actions";
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';


class AboutUsPageComponent extends React.Component {

    componentDidMount() {
        this.props.loadAgGridData();
    }

    render() {

        return (

            <React.Fragment >

                {/* <Prompt when={true} message={"Are you sure want to redirect ?"} ></Prompt> */}

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">Welcome { sessionStorage.getItem("name")} !</NavbarBrand>

                    <Nav className=" ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/charts/"  ><Button color="link">aM Charts</Button></NavLink>
                        </NavItem>
                    </Nav>

                    <Nav>
                        <NavItem>
                            <NavLink to="/" onClick={this.props.onLogOut} onClickCapture={() => sessionStorage.removeItem("name")} ><Button color="link">Log Out</Button></NavLink>
                        </NavItem>
                        {/* <NavLink to="/test/">grid test</NavLink> */}
                    </Nav>
                </Navbar>


                <hr />
                <div className="ag-theme-balham" style={{ height: "349px", width: 'auto' }}>
                    <AgGridReact
                        columnDefs={this.props.columnDefs}
                        rowData={this.props.rowData}
                        pagination={true}
                        paginationPageSize={10}
                        colWidth={313}>
                    </AgGridReact>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.mainReducer.userName,
        columnDefs: state.mainReducer.headerData,
        rowData: state.mainReducer.rowData,
        defaultColDef: state.mainReducer.defaultColDef

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onLogOut: onLogOut,
        loadAgGridData: loadAgGridData
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutUsPageComponent);


