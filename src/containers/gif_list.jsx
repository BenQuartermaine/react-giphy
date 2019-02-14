import React, { Component } from 'react';
import Gif from './gif';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif key={gif.id} id={gif.id} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  }
}

export default connect(mapStateToProps, null)(GifList);
