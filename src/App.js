import React, { Component } from 'react';
import PlayQueue from './components/PlayQueue';
import MusicPlayer from './components/MusicPlayer';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    // if (props.currentSong) {
    //   const index = props.songs.find(i => i.id === props.currentSong);
    // }
  }

  onMusicSelected(songId) {
    console.log('music selected');
  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Player</h1>
        </header>
        <main className="App-intro">
          <PlayQueue />
          <MusicPlayer />
        </main>
      </div>
    );
  }
}

export default App;
