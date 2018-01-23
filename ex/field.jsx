import React, { Component } from 'react';

class Filed extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <div>
        <h3>{this.state.value}</h3>
        <input onChange={this.handleChange} value={ this.state.value } />
      </div>
    );
  }
}

export default Filed;