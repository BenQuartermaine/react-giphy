import React, { Component } from 'react';
import { setGif } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Gif extends Component {
  updateClick = (props) => {
    this.props.setGif(this.props.id)
  }

  render() {
    const search = `https://media0.giphy.com/media/${this.props.id}/200w.gif?`
    return (
      <img src={search} className="gif" onClick={this.updateClick} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGif },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Gif);
