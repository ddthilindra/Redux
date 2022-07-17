import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {
  createListItem() {
    return this.props.allPosts.map((post) => {
      return (
        <li key={post.id}>
          {post.title} {post.body}
        </li>
      );
    });
  }
  render() {
    if(!this.props.allPosts){
        return(<h2>Click the button first!</h2>)
    }
    return <ul>{this.createListItem()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    allPosts: state.allPosts,
  };
}

export default connect(mapStateToProps)(PostList)