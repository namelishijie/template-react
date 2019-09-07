import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import mapDispatchToProps from './homeAction'

class Home extends Component {
  render() {
    return (
      <div>{this.props.getAction.c}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    getAction: state.HomeReducers
  }
}

const mapDispatch = dispatch => {
  return {
    setAction: bindActionCreators(mapDispatchToProps, dispatch)
  }
}

export default Home = connect(mapStateToProps, mapDispatch)(Home)
