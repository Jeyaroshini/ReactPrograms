import React from "react";
class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      status: false,
      updateInput: "",
      inputs: [],
      id: null,
    };
    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
    event.preventDefault();
  };
  addTask = (event) => {
    const inputs = [...this.state.inputs];
    inputs.push(this.state.input);
    this.setState({
      id: Math.floor(Math.random() * 10000),
      inputs: inputs,
      input: "",
    });
    console.log(this.state.input, this.state.id);
    event.preventDefault();
  };
  deleteItem = (id) => {
    this.setState({
      inputs: this.state.inputs.filter((item) => item.id !== id),
    });
  };
  handleUpdate = (event) => {
    this.setState({
      status: true,
    });
    event.preventDefault();
  };
  updateInput = (event) => {
    this.setState({
      updateInput: event.target.value,
    });
    event.preventDefault();
  };
  handleSubmit = (event) => {
    this.setState({
      input: this.state.updateInput,
      updateInput: "",
      status: false,
    });
    console.log(this.state.input);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form>
          Input: <input onChange={this.handleInput}></input>
          <button onClick={this.addTask}>Add Task</button>
          {this.state.inputs.map((item) => {
            return (
              <div>
                {item}
                <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                <button onClick={this.handleUpdate}>Update</button>
                {this.state.status && (
                  <form>
                    Input: <input onChange={this.updateInput}></input>
                    <button onClick={this.handleSubmit}>Submit</button>
                  </form>
                )}
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}
export default Update;
