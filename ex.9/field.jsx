import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldAction';

class Filed extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.value}</h3>
        <input onChange={this.props.changeValue} value={ this.props.value } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(Filed);