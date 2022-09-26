resumeBuilder.jsx

import React from "react";
import Education from "./education";
class ResumeBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mail: "",
      phoneNumber: "",
      objective: "",
      viewStatus: false,
      skill: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handlemail = this.handlemail.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleObjective = this.handleObjective.bind(this);
    this.handleSkill = this.handleSkill.bind(this);
    this.handleView = this.handleView.bind(this);
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
    event.preventDefault();
  };
  handlemail = (event) => {
    this.setState({
      mail: event.target.value,
    });
    event.preventDefault();
  };
  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
    event.preventDefault();
  };
  handleObjective = (event) => {
    this.setState({
      objective: event.target.value,
    });
    event.preventDefault();
  };
  handleSkill = (event) => {
    this.setState({
      skill: event.target.value,
    });
    event.preventDefault();
  };
  handleView = (event) => {
    this.setState({
      viewStatus: true,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          Name:{" "}
          <input
            placeholder="Enter Your Name"
            onChange={this.handleName}
          ></input>
          <br />
          E-Mail:{" "}
          <input
            placeholder="Enter Your E-mail"
            onChange={this.handlemail}
          ></input>
          <br />
          Number:{" "}
          <input
            placeholder="Enter Your Phone Number"
            onChange={this.handlePhoneNumber}
          ></input>
          <br />
          Career Objective:{" "}
          <textarea
            placeholder="Enter Your Career Objective"
            onChange={this.handleObjective}
          ></textarea>
          <br />
          Skills:{" "}
          <textarea
            placeholder="Enter your Skills"
            onChange={this.handleSkill}
          ></textarea>
          <br />
          Educational Qualification: <Education />
        </form>
        <button onClick={this.handleView}>View Resume</button>
        <div>
          {this.state.viewStatus && (
            <p>
              {this.state.name}
              <br />
              {this.state.mail}
              <br />
              {this.state.phoneNumber}
              <br />
              <hr />
              <b>Career Objective</b>
              <br />
              {this.state.objective}
              <br />
              <hr />
              <b>Skills</b> <br />
              {this.state.skill}
              <hr />
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default ResumeBuilder;


education.jsx:

import React from "react";
class Education extends React.Component {
  constructor() {
    super();
    this.state = { degree: "", stream: "", graduation: "" };
    this.handleDegree = this.handleDegree.bind(this);
    this.handleStream = this.handleStream.bind(this);
    this.handlegraduation = this.handlegraduation.bind(this);
  }
  handleDegree = (event) => {
    this.setState({
      degree: event.target.value,
    });
  };
  handleStream = (event) => {
    this.setState({
      stream: event.target.value,
    });
  };
  handlegraduation = (event) => {
    this.setState({
      graduation: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          Degree: <input onChange={this.handleDegree}></input>
          <br />
          Stream: <input onChange={this.handleStream}></input>
          <br />
          Year of Graduation: <input onChange={this.handlegraduation}></input>
          <br />
        </form>
      </div>
    );
  }
}
export default Education;

