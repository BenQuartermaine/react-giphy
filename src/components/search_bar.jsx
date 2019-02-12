import React, { Component } from 'react';

class SearchBar extends Component {
  searchQuery = (event) =>  {
    const input = event.target.value;
    this.props.searchFunction(input);
  }

  render() {
    return (
      <input placeholder='Search..'type="text" className="form-control form-search" onChange={this.searchQuery} />
    )
  };
}
export default SearchBar;