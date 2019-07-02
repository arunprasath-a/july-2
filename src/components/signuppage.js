import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FaUserCircle } from "react-icons/fa";
import "../css/signuppage.css";
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

class SignUpPageComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            fields: {},
            errors: {},
        }
    }



    inputChange(field, event) {
        let fields = { ...this.state.fields };
        fields[field] = event.target.value;
        this.setState({ fields });
    }



    handleValidation() {
        let formIsValid = true;
        let fields = this.state.fields;
        let errors = {};




        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*required";

        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^(?=.{4,15}$)[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "*Only letters are allowed with 4 character min";
            }

        }


        if (!fields["pass"]) {
            formIsValid = false;
            errors["pass"] = "*required";
        }
        if (typeof fields["pass"] !== "undefined") {
            if (!fields["pass"].match(/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)) {
                formIsValid = false;
                errors["pass"] = "*Password should contain atleast one uppercase,number and symbol";
            }

        }




        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*required";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "*Email is not valid";
            }

        }


        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "*required";
        }
        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["phone"] = "*only numbers allowed";
            }
        }





        this.setState({ errors: errors });
        return formIsValid;
    }




    onformsubmit(event) {
        event.preventDefault();

        if (this.handleValidation()) {
            alert("successful");
            this.props.history.push(`/LogIn/`);
            var userOBJ = [this.state.fields["name"], this.state.fields["pass"], this.state.fields["phone"], this.state.fields["email"]];
            localStorage.setItem("cred", JSON.stringify(userOBJ))
        } else {
            alert("check for errors");
        }
    }





    render() {


        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="#">Sign Up here !</NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink to="/">Go Back</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4"></Col>
                        <Col xs="6" sm="4">
                            <Form onSubmit={this.onformsubmit.bind(this)}>
                                <div className="userCircleClass">
                                    <FaUserCircle size="150" color="#0c4196" />
                                </div>
                                <br></br>
                                <div className="loginElements">
                                    <div>
                                        <h1>Join with us !</h1>
                                    </div>
                                </div>

                                <FormGroup>
                                    <Label for="exampleEmail">Name</Label>
                                    <Input ref="name" valid={this.state.isValid} invalid={this.state.isNameInValid} onChange={this.inputChange.bind(this, "name")}  />
                                    <span style={{ color: "red", fontSize: "10px" }}>{this.state.errors["name"]}</span>
                                    {/* <FormFeedback invalid>error!</FormFeedback> */}


                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input valid={this.state.isValid} invalid={this.state.isPassInValid} onChange={this.inputChange.bind(this, "pass")} type="text" />
                                    <span style={{ color: "red", fontSize: "10px" }}>{this.state.errors["pass"]}</span>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Phone number</Label>
                                    <Input valid={this.state.isValid} invalid={this.state.isPhoneInValid} onChange={this.inputChange.bind(this, "phone")} />
                                    <span style={{ color: "red", fontSize: "10px" }}>{this.state.errors["phone"]}</span>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Email</Label>
                                    <Input valid={this.state.isValid} invalid={this.state.isEmailInValid} onChange={this.inputChange.bind(this, "email")} />
                                    <span style={{ color: "red", fontSize: "10px" }}>{this.state.errors["email"]}</span>

                                </FormGroup>

                                <Button color="primary">Sign Up</Button>
                            </Form>

                        </Col>
                        <Col xs="6" sm="4"></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default SignUpPageComponent