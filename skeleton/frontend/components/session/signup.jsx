import React from "react";
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    handleSubmit(e) {
        e.prevenDefault();
        this.props.createNewUser(this.state) //from signup_container mDTP
        .then( () => this.props.history.push('/chirps'));
    }
    render () {
        return (
          <div className="session-form">
            <h2>Sign up</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value="{this.state.username"
                  onChange={this.handleInput("username")}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  value="{this.state.email"
                  onChange={this.handleInput("eamil")}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value="{this.state.password"
                  onChange={this.handleInput("password")}
                />
              </label>
              <button onClick={this.handleSubmit(t)}>Sign Up</button>
            </form>
          </div>
        );
    }
};
export default Signup;