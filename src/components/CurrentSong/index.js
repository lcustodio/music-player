import React from 'react';

const CurrentSong = props =>
  props.song ? (
    <div>
      <div>{props.song.title}</div>
      <div>{props.song.artist}</div>
      <div>{props.song.album}</div>
    </div>
  ) : (
    <p>No music is playing</p>
  );

export default CurrentSong;
