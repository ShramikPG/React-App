import React, {Component} from 'react'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.first_name.length > 0 && this.state.last_name.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const user = JSON.stringify(this.state)
    event.preventDefault();
    console.log(user)
    fetch('http://localhost:3001/api/registrations', {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: user
    }).then(res=>res.json())
  .then(res => console.log(res));
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="first_name" bssize="large">
            <FormLabel>First name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="last_name" bssize="large">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              value={this.state.last_name}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}