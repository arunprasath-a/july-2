import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import "../css/login.css";
import { connect } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import "../css/signuppage.css";
import { bindActionCreators } from 'redux';
import { onNameChange,onPassChange} from "../store/actions/actions";



class LogInPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userdetails_Local: JSON.parse(localStorage.getItem("cred"))
        }
    }


    // componentWillMount(){
    //     console.log("will mount")
    // }

    // componentDidMount(){
    //     console.log("did mount")
    // }

    // componentDidUpdate(){
    //     console.log("did update")
    // }

    // componentWillUpdate(){
    //     console.log("will update")
    // }

    // componentWillUnmount(){
    //     console.log("will unmount")
    // }





   onFormSubmit(event) {
        event.preventDefault();
        
        if (this.state.userdetails_Local === null) {
            alert("user not exists please sign up first !");
            this.props.onLogOut();
        }else if (this.state.userdetails_Local !== null){
            if (this.props.userName === this.state.userdetails_Local[0]){
                if (this.props.password === this.state.userdetails_Local[1]){
                    this.props.history.push(`/About/`);
                    sessionStorage.setItem("name", this.props.userName);
                    alert("Login success");
                } else{
                    alert("Invalid credentials");
                }
            } else {
                alert("Invalid credentials");
            }
        }

    }






    render() {

            //console.log("rendering")
        return (

            <React.Fragment>

                <Container>

                    <Row>
                        <Col xs="1" ></Col>
                        <Col xs="10" >
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="#">Log In</NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink to="/" onClick={this.props.onLogOut}>Go Back</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>

                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6"><div className="loginform">
                            <form onSubmit={this.onFormSubmit.bind(this)}>
                           
                                <br></br>
                                <div className="LoginUserIcon">
                                <FaUserTie size="150" color="#0c4196"/>
                                </div>
                                <br></br>
                                <div className="loginElements">
                                    <div>
                                        <h1>Join with us !</h1>
                                    </div>
                                    <br></br>


                                    <div>
                                        <InputGroup>

                                            <Input placeholder="username" className="nameInpClass" required name="username" value={this.props.userName} onChange={this.props.onNameChange} />
                                            <InputGroupAddon addonType="append">Ur Name Here </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <br></br>
                                    <div>
                                        <InputGroup>
                                            <Input placeholder="Password" type="password" className="passInpClass" required value={this.props.password} onChange={this.props.onPassChange} />
                                            <InputGroupAddon addonType="append">Password Here</InputGroupAddon>
                                        </InputGroup>
                                    </div>

                                    <br></br>

                                    <div>
                                        <Button color="primary" >Log In</Button>
                                    </div>

                                </div>

                            </form>
                        </div>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>

                </Container>

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userName: state.mainReducer.userName,
        password: state.mainReducer.password,
       }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        onNameChange: onNameChange,
        onPassChange: onPassChange,
    },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LogInPageComponent); 