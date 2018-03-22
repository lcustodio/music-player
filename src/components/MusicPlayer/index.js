import React, { Component } from 'react';
import './index.css';

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  render() {
    let percentageComplete = 60;
    return (
      <div
        className="MusicPlayer"
        style={{
          background: `linear-gradient(to right, green ${percentageComplete}%, rgba(255, 255, 255, 0.1) ${100 -
            percentageComplete}%)`
        }}
      >
        <div className="MusicPlayer is-stopped">></div>
      </div>
    );
  }
}
