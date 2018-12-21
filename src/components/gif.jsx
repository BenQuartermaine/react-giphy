import React, { Component } from 'react';

class Gif extends Component {
  updateClick = () => {     
    if (this.props.handleClick) {
      this.props.handleClick(this.props.id)
    }
  }

  render() {
    const search = `https://media0.giphy.com/media/${this.props.id}/200w.gif?`
    return (
        <img src={search} className="gif" onClick={this.updateClick} />
    );
  }
}

export default Gif;