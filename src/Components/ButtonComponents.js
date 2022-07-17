import React, { Component } from 'react'
import {fetchPosts} from '../Actions/PostAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ButtonComponents extends Component {
  render() {
    return (
      <div><button onClick={()=>this.props.fetchPosts()}>Click Me</button></div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts:fetchPosts},dispatch)
}

export default connect(null,matchDispatchToProps)(ButtonComponents)
