import React, { Component } from "react";
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "l3V0doGbp2EDaLHJC"
    };
    this.search('beyonce')

    // setInterval(() => {
    //   alert('Annoying!')
    // }, 5000);
  }


  
  search = (query) => {
    giphy('vYS3kwDnk3EQFMPtucA1tmfY6gXSVFwi').search({
        q: query,
        rating: 'g',
        limit: 20
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

  handleClick = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} /> 
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
