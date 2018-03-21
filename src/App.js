import React, { Component } from 'react';
import PlayQueue from './components/PlayQueue';
import CurrentSong from './components/CurrentSong';
import MusicPlayer from './components/MusicPlayer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Player</h1>
        </header>
        <main className="App-intro">
          <PlayQueue />
          <CurrentSong />
          <MusicPlayer />
        </main>
      </div>
    );
  }
}

export default App;
