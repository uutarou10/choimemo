import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fetching: false
    };
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        { currentUser ? <Redirect to='/list' /> : undefined}
        <h2>Login</h2>
        <form onSubmit={this.onSubmitHandler}>
          <label>Email</label>
          <input
            type='email'
            name='email'
            onChange={this.onChangeHandler}
            required
          />

          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={this.onChangeHandler}
            required
          />

          <button
            type='submit'
            disabled={!this.isValid()}
          >ログイン</button>
        </form>
      </div>
    );
  }

  isValid = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const { loginWithEmailAndPassword } = this.props
    this.setState({fetching: true});
    loginWithEmailAndPassword(this.state.email, this.state.password);
  }
}

export default Login;