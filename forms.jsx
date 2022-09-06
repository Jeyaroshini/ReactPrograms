import React from "react";
class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "C Language",
      fixedAmount: [2000],
      submit: false,
      defaultDuration: "3",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mainCourse = this.mainCourse.bind(this);
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
  mainCourse() {
    if (this.state.value === "C Language") {
      console.log(
        "Total Amount: ",
        this.state.fixedAmount[0] - 500,
        "Duration: ",
        this.state.defaultDuration,
        "hours"
      );
    } else if (this.state.value === "JAVA") {
      console.log(
        "Total Amount: ",
        this.state.fixedAmount[0] + 1000,
        "Duration: ",
        this.state.defaultDuration,
        "Hours"
      );
    } else if (this.state.value === "Python") {
      console.log(
        "Total Amount: ",
        this.state.fixedAmount[0] + 5000,
        "Duration: ",
        this.state.defaultDuration,
        "Hours"
      );
    } else {
      console.log(
        "Total Amount: ",
        this.state.fixedAmount[0],
        "Duration: ",
        this.state.defaultDuration,
        "Hours"
      );
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button onClick={this.mainCourse}>Fee Details</button>
        </div>
      </div>
    );
  }
}
export default Forms;
