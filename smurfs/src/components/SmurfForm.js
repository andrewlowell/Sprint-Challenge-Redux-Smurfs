import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf({name: this.state.name, age: this.state.age, height: this.state.height});
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div className="smurfForm">
        <form onSubmit={this.handleSubmit}>
          <h3>Add a new smurf to the village :)</h3>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="age">Age</label>
          <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
          <label htmlFor="height">Height</label>
          <input type="text" name="height" value={this.state.height} onChange={this.handleChange} />
          <input type="submit" value="Add new Smurf"/>
        </form>
      </div>
    );
  }
}

export default SmurfForm;