import React from "react";
import styled from "styled-components";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: White;
`;

// Create a Background component that'll render a <section> tag with some styles
const Background = styled.section`
  background: SlateGray;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
`;

export default function SignIn() {
  return (
    <div>
      this is sign in
      <Background>
        <Title>Welcome To My Generic Chat App</Title>

        <TextField
          id="Username"
          label="Username"
        //   className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          />

            <TextField
          id="Password"
          label="Password"
        //   className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          type="password"
          />

        <Input
        defaultValue="Username"
        // className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
        
        <Input
        defaultValue="Username"
        // className={classes.input}
        type="password"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
        
      </Background>

        Username
       
        

        Password

    </div>
  );
}
