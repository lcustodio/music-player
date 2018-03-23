import React from 'react';
import './index.css';

const PlayQueue = props => {
  if (!props.songs || props.songs.length === 0) {
    return <div className="PlayQueue">No musics to be player - sad</div>;
  }

  return (
    <div className="PlayQueue">
      <div>
        <div className="PlayQueue-header">
          <div className="line">Title</div>
          <div className="line">Artist</div>
          <div className="line">Album</div>
          <div className="line center">Length</div>
        </div>
        <div />
        {props.songs.map(song => (
          <div
            className="PlayQueue-container"
            key={song.id}
            onClick={() => props.onMusicSelected(song.id)}
          >
            <div className="line PlayQueue-musicTitle">{song.title}</div>
            <div className="line">{song.artist}</div>
            <div className="line">{song.album}</div>
            <div className="line center">{song.length}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PlayQueue;
