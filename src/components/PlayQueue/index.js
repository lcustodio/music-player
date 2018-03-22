import React from "react";
import "./index.css";

const PlayQueue = props => {
  if (!props.songs || props.songs.length === 0) {
    return <div className="PlayQueue">No musics to be player - sad</div>;
  }

  return (
    <div className="PlayQueue">
      {props.songs.map(song => (
        <div className="PlayQueue-container"key={song.id} onClick={() => props.onMusicSelected(song.id)}>
          <div className="PlayQueue-musicTitle">{song.title}</div>
          <div>{song.artist}</div>
          <div>{song.album}</div>
        </div>
      ))}
    </div>
  );
};
export default PlayQueue;
