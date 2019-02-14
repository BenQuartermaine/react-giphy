import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gifList } from '../actions';

class SearchBar extends Component {
  render() {
    const gifList = this.props.gifList;
    return (
      <input 
        placeholder='Search..'
        type="text" 
        className="form-control form-search" 
        onChange={() => gifList(event.target.value)} 
      />
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { gifList },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(SearchBar);
