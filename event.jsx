import React from "react";
class Event extends React.Component {
  constructor() {
    super();
    this.state = { status: false };
  }
  handleLogin() {
    this.setState({
      status: true,
    });
  }
  handleLogout() {
    this.setState({
      status: false,
    });
  }
  render() {
    if (this.state.status) {
      <LogOutButton onClick={this.handleLogout} />;
    } else {
      <LogInButton onClick={this.handleLogin} />;
    }

    return (
      <div>
        <Greeting />
      </div>
    );
  }
}
function Greeting() {
  if (this.state.status) {
    return <h1>SignUp</h1>;
  } else {
    return <h1>Welcome</h1>;
  }
}

function LogOutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function LogInButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
export default Event;
