import React, { Component } from 'react';

class SearchBar extends Component {
  searchQuery = (event) =>  {
    this.props.searchFunction(event.target.value)
  }

  render() {
    return (
    <input type="text" className="form-control form-search" onChange={this.searchQuery} />
    )
  };
}
export default SearchBar;