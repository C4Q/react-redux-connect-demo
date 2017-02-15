import React, {Component} from 'react';
import store from '../redux/store/store';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import Greetings from '../presentational/Greetings.jsx';
import Loading from '../presentational/Loading.jsx';

class GreetingsContainer extends Component {
  renderGreetings() {
    return <Greetings greetings={this.props.greetings} clickHandler1={this.props.actions.addGreeting.bind(this, 'hello')} clickHandler2={this.props.actions.addGreeting.bind(this, 'what up')}/>
  }

  renderLoading() {
    return <Loading />
  }

  render() {
    return this.props.greetings ? this.renderGreetings() : this.renderLoading()
  }
}

const mapStateToProps = (state) => ({
  greetings: state.greetings
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GreetingsContainer);
