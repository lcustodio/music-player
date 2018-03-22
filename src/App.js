import React, { Component } from 'react';
import CurrentSong from './components/CurrentSong';
import PlayQueue from './components/PlayQueue';
import MusicPlayer from './components/MusicPlayer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onMusicSelected = this.onMusicSelected.bind(this);

    this.state = {};
  }

  componentDidMount() {
    const playQueue = Object.assign([], this.props.musics);
    const currentSong = playQueue.shift();
    this.setState({ currentSong, playQueue });
  }

  onMusicSelected(songId) {
    console.log('music selected');
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
          <MusicPlayer song={this.state.currentSong} />
        </main>
      </div>
    );
  }
}

export default App;
