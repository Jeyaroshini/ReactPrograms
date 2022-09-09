import React from "react";
class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "C Language",
      fixedAmount: [2000],
      submit: false,
      defaultDuration: "3",
      name: "",
      empty: [],
      valueList: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registration = this.registration.bind(this);
    this.handleName = this.handleName.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    this.setState({ submit: true });
    event.preventDefault();
  };
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  registration = (event) => {
    if (this.state.name !== "") {
      const empty = [...this.state.empty];
      const valueList = [...this.state.valueList];
      empty.push(this.state.name);
      valueList.push(this.state.value);
      this.setState({
        submit: true,
        empty: empty,
        name: "",
        value: "",
        valueList: valueList,
      });
    }
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h2>Welcome to Online Course Reservation System</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            Username:{" "}
            <input type={this.state.name} onChange={this.handleName}></input>
            <button onClick={this.registration}>Register</button>
            <div></div>
          </div>
          <label>Pick a Course:</label>
          <select value={this.state.value} onChange={this.handleInput}>
            <option value="C Language">C Language</option>
            <option value="Python">Python</option>
            <option value="JAVA">JAVA</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <button type="Submit">Submit</button>
        </form>
        Course You Picked is: {this.state.submit && this.state.value}
        <div>
          Total Amount:
          {this.state.submit && this.state.fixedAmount}
          <div>
            Duration:
            {this.state.submit && this.state.defaultDuration} hours
            <div>
              {this.state.empty.map((item) => {
                return (
                  <div>
                    <strong> Welcome: </strong> {item}
                  </div>
                );
              })}
              {this.state.valueList.map((item) => {
                return (
                  <div>
                    <strong> your course is: </strong> {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forms;
