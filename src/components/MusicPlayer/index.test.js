import React from 'react';
import { shallow } from 'enzyme';

import MusicPlayer from './index';

describe('Music Player', () => {
  it('should handle no active song', () => {
    const expected = shallow(<MusicPlayer />);
    expect(expected.html()).toContain('MusicPlayer is-stopped');
  });

  // it('should display the remaining time', () => {
  //   const expected = shallow(<MusicPlayer music={music()} />);
  //   expect(expected.at(0).length).toBe(3);
  // });
});

function music() {
  return {
    id: 1,
    title: 'Title 1',
    artist: 'Artist 1',
    album: 'Album 1',
    length: '5:15'
  };
}
