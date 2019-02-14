import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import Gif from '../containers/gif'
import GifList from '../containers/gif_list'
import giphy from 'giphy-api'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.props.selectedGif} /> 
          </div>
        </div>
        <div className="right-scene">
          <GifList handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedGif: state.selectedGif
  }
}

export default connect(mapStateToProps, null)(App);
