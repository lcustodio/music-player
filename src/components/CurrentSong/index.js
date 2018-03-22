import React from 'react';
import './index.css';

const imgSize = 100;

const CurrentSong = props =>
  props.song ? (
    <div className="CurrentSong">
      <div className="CurrentSong-description"> 
        <div className="CurrentSong-title">{props.song.title}</div>
        <div className="CurrentSong-artist">{props.song.artist}</div>
      </div>
      <div className="CurrentSong-album">
        <img alt='album-cover' src={`https://picsum.photos/${imgSize}/${imgSize}`}></img>
        <div className="CurrentSong-albumName">{props.song.album}</div>
      </div>
    </div>
  ) : (
    <div className="CurrentSong">
      <p>No music playing</p>
    </div>
  );

export default CurrentSong;
