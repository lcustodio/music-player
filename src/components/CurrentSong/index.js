import React from 'react';
import './index.css';

const CurrentSong = props =>
  props.song ? (
    <div className="CurrentSong">
      <div>{props.song.title}</div>
      <div>{props.song.artist}</div>
      <div>{props.song.album}</div>
    </div>
  ) : (
    <div className="CurrentSong">
      <p>No music playing</p>
    </div>
  );

export default CurrentSong;
