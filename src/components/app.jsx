import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [], 
      selectedGifId: "XCfV6uqPh7des7RZwX"
    }
  }
 
  search = (query) => {
    // TODO: API Call
    giphy('FT4uabcKY57QkgANnnDJ5gMaO9UzPPHp').search({
      q: query,
      rating: 'g', 
      limit: 100
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
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
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;