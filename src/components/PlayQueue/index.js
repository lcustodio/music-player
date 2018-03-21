import React from 'react';

const PlayerQueue = props => {
  if (!props.songs || props.songs.length === 0) {
    return <p>No musics to be player - sad</p>;
  }

  return props.songs.map(song => (
    <div onClick={() => props.onMusicSelected(song.id)}>
      <div>{song.title}</div>
      <div>{song.artist}</div>
      <div>{song.album}</div>
    </div>
  ));
};
export default PlayerQueue;
