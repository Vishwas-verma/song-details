import React from "react";
import { connect } from "react-redux";

const SongDetail      = (props: any) => {
  if (!props.song) {
    return (
      <div>
        Select A Song
      </div>
    );
  }
  return (
    <div>
      <h3>Details-</h3>
      <p>
        Title:{props.song.title}
        <br/>
        Duration:{props.song.duration}
      </p>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);