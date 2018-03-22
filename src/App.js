import React, { Component } from 'react';
import CurrentSong from './components/CurrentSong';
import PlayQueue from './components/PlayQueue';
import MusicPlayer from './components/MusicPlayer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Music Player</div>
        </header>
        <main className="App-container">
          <CurrentSong />
          <PlayQueue />
          <MusicPlayer />
        </main>
      </div>
    );
  }
}

export default App;
