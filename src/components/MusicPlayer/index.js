import React, { Component } from 'react';
import './index.css';

export default class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = { playing: false, secondsPlayed: 0 };
    this.oneSecondInterval = this.oneSecondInterval.bind(this);
  }

  oneSecondInterval() {
    this.setState({
      playing: true,
      secondsPlayed: this.state.secondsPlayed + 1
    });
  }

  componentDidMount(props) {
    this.secondsInterval = setInterval(this.oneSecondInterval, 1000);
    this.setState({ playing: true });
  }

  startStopToggle(isPlaying) {
    if (isPlaying) {
      clearInterval(this.secondsInterval);
      this.setState({ playing: false });
    } else {
      this.secondsInterval = setInterval(this.oneSecondInterval, 1000);
      this.setState({ playing: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.music && nextProps.music.id !== this.props.music.id) {
      this.setState({ secondsPlayed: 0 });
    }
  }

  render() {
    let totalSeconds;
    if (this.props.music) {
      const lengthObj = this.props.music.length.split(':');
      totalSeconds = lengthObj[0] * 60 + parseInt(lengthObj[1], 10);
    }

    let percentageComplete = totalSeconds
      ? Math.round(this.state.secondsPlayed * 100 / totalSeconds)
      : 0;

    if (percentageComplete >= 100) {
      this.props.nextSong();
      this.setState({ playing: true, secondsPlayed: 0 });
    }

    return (
      <div
        className="MusicPlayer"
        style={{
          background: `linear-gradient(to right, green ${percentageComplete}%, rgba(255, 255, 255, 0.1) ${percentageComplete +
            3}%)`
        }}
      >
        <div
          className="MusicPlayer button"
          onClick={() => this.startStopToggle(this.state.playing)}
        >
          {this.state.playing ? '■' : '►'}
        </div>
      </div>
    );
  }
}
