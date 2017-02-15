import React, {Component} from 'react';
import store from '../redux/store/store';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/actions/actions';
import { bindActionCreators } from 'redux'

class GifContainer extends Component {
  constructor() {
    super();
    this.addGreeting = this.addGreeting.bind(this);
  }

  mapGreetings(greeting, indx) {
    return <li key={indx}>{greeting}</li>
  }

  addGreeting() {
    this.props.actions.addGreeting('Hello!');
  }

  render() {
    return (
      <ul>
        {this.props.greetings.map(this.mapGreetings)}
        <button onClick={this.addGreeting}>Add Greeting</button>
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  greetings: state.greetings
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);
