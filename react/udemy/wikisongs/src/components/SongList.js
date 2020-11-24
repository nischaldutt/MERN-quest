import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const renderSongList = (props) => {
  return props.songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => props.selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });
};

const SongList = (props) => {
  return <div className="ui divided list">{renderSongList(props)}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
