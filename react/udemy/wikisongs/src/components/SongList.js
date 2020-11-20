import React from "react";
import { connect } from "react-redux";

const renderSongList = (songs) => {
  return songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">Select</button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });
};

const SongList = (props) => {
  console.log(props);
  return <div className="ui divided list">{renderSongList(props.songs)}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
