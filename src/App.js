import React, { Component } from 'react';
import CurrentSong from './components/CurrentSong';
import PlayQueue from './components/PlayQueue';
import MusicPlayer from './components/MusicPlayer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onMusicSelected = this.onMusicSelected.bind(this);
    this.onNextSong = this.onNextSong.bind(this);

    this.state = {};
  }

  componentDidMount() {
    const playQueue = Object.assign([], this.props.musics);
    const currentSong = playQueue.shift();
    this.setState({ currentSong, playQueue });
  }

  onMusicSelected(songId) {
    const playQueue = Object.assign([], this.state.playQueue);
    const songIndex = playQueue.findIndex(item => item.id === songId);
    const currentSong = playQueue.splice(songIndex, 1)[0];
    this.setState({ currentSong, playQueue });
  }

  onNextSong(songId) {
    const playQueue = Object.assign([], this.state.playQueue);
    const currentSong = playQueue.shift();
    this.setState({ currentSong, playQueue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Music Player</div>
        </header>
        <main className="App-container">
          <CurrentSong song={this.state.currentSong} />
          <PlayQueue
            songs={this.state.playQueue}
            onMusicSelected={this.onMusicSelected}
          />
          <MusicPlayer
            music={this.state.currentSong}
            nextSong={this.onNextSong}
          />
        </main>
      </div>
    );
  }
}

export default App;
