import React, { useState } from 'react';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;

class LoginPage extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        error: '',
      };
  
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
    }
  
    dismissError() {
      this.setState({ error: '' });
    }
  
    handleSubmit(evt) {
      evt.preventDefault();
  
      if (!this.state.username) {
        return this.setState({ error: 'Username is required' });
      }
  
      if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
      }
  
      return this.setState({ error: '' });
    }
  
    handleUserChange(evt) {
      this.setState({
        username: evt.target.value,
      });
    }
  
    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }
  
    render() {
      // NOTE: I use data-attributes for easier E2E testing
      // but you don't need to target those (any css-selector will work)
  
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            }
            <label>User Name</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
  
            <label>Password</label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
  
            <input type="submit" value="Log In" data-test="submit" />
          </form>
        </div>
      );
    }
  }