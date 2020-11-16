import React from "react";
import SearchBar from "./SearchBar";
import youTubeApi from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearch("batman");
  }

  onSearch = async (term) => {
    const response = await youTubeApi.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
