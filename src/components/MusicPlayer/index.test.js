import React from 'react';
import { shallow } from 'enzyme';

import MusicPlayer from './index';

describe('Music Player - time', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should update the remaining time', async () => {
    const expected = shallow(<MusicPlayer music={music()} />);

    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    expect(expected.state('secondsPlayed')).toBe(2);
  });

  it('should zero the played seconds when new song is selected', () => {
    const expected = shallow(<MusicPlayer music={music()} />);

    jest.runTimersToTime(2000);
    expect(expected.state('secondsPlayed')).toBe(2);

    expected.setProps({ music: music2() });
    expect(expected.state('secondsPlayed')).toBe(0);
  });

  it('should trigger next song when audio is finished', async () => {
    const mockCallback = jest.fn();

    const expected = shallow(
      <MusicPlayer music={music()} nextSong={mockCallback} />
    );
    jest.runTimersToTime(10000);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});

function music() {
  return {
    id: 1,
    title: 'Title 1',
    artist: 'Artist 1',
    album: 'Album 1',
    length: '0:10'
  };
}

function music2() {
  return {
    id: 2,
    title: 'Title 2',
    artist: 'Artist 2',
    album: 'Album 2',
    length: '0:20'
  };
}
