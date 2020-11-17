import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.term);
  };

  handleInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>YouTube Video Streamer</label>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
