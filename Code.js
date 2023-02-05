import React, { Component } from "react";
import {Container, Form, Button} from 'react-bootstrap';

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    };

    // Update state whenever an input field is edited 
    handleChange = (event) => {  
        const {name, value} = event.target; 

        this.setState({ name: value }); 
    } 

    // form submit 
submitForm = (event) => {   event.preventDefault();   alert("You have successfully logged in!"); }

    render(){

        const batmanBackgroundStyle = {backgroundImage: "url(./images/batman-bg.png)", padding: 100, display: 'flex', justifyContent: 'center'};

        return(            
            <div className="login-page" style={batmanBackgroundStyle}> 

                <Container>                              

                    <div className="login-logo" style={{textAlign:"center"}}>                                                                                 <img src="./images/batman-logo.png" alt="Batman Logo"/>                               </div>                                                               

                    <Form onSubmit={this.submitForm}>                       

                        <Form.Group controlId="username">           

                            <Form.Label htmlFor="username"><strong>Username</strong></Form.Label><br/>    

                            <Form.Control type="text" name="username" placeholder="Your username..." link="#000000"                  value={this.state.username} onChange={this.handleChange} />                       </Form.Group><br/>               

                         <Form.Group controlId="password">     

                           <Form.Label htmlFor="password"><strong>Password</strong></FormsLabel><br/>              

                           <InputGroup size="lg">                     <InputGroup shortText roundedLeft color="#000000"             type="password" name="password" placeholder=""                   value={this.state.password} onChange={this->handleChange} />              </InputGroup><br/>      <!--Login button--><Button block bg="#FFC412 primaryText="#111517">Log In</Button>           </form ><br/> <!--Forgot password--><p style={{fontSize:'14px', textAlign:"center"}, color:"#FFFFFF"} > Forgot Password? Reset Here!</p>                     </Container>                </div>)  }} export default LoginPage;

