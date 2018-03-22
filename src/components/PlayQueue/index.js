import React from 'react';
import './index.css';

const PlayQueue = props => {
  if (!props.songs || props.songs.length === 0) {
    return ( 
      <div className="PlayQueue">
        No musics to be player - sad
    </div>);
  }

  return props.songs.map(song => (
    <div className="PlayQueue" onClick={() => props.onMusicSelected(song.id)}>
      <div>{song.title}</div>
      <div>{song.artist}</div>
      <div>{song.album}</div>
    </div>
  ));
};
export default PlayQueue;
