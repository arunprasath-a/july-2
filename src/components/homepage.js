import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import "../css/homepage.css";
import { Button } from 'reactstrap';
//import Loader from 'react-loader-spinner';


export default class HomePageComponent extends React.Component {

   

  
    render() {
      
        return (

            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">HCL HomePage</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <div>
                                <NavLink className="loginNav" to="/LogIn/"><Button color="link">Log In</Button></NavLink>
                                <NavLink to="/SignUp/"><Button color="link">Sign Up</Button></NavLink>
                            </div>
                        </NavItem>
                        {/* <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height="100"
                            width="100"
                        /> */}

                    </Nav>
                </Navbar>
            </React.Fragment>

        )
    }
}



