import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  renderList = (props) => {
    return this.props.gifs.map(({ id }) => <Gif id={id} key={id} handleClick={this.props.handleClick} />)
  };

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}
export default GifList;