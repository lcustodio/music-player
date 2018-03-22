import React from 'react';
import { shallow } from 'enzyme';

import CurrentSong from './index';

describe.only('Current Song', () => {
  it('should handle no song', () => {
    const expected = shallow(<CurrentSong />);
    expect(expected.html()).toContain('No music playing');
  });

  it('should display artist name', () => {
    const expected = shallow(<CurrentSong song={song()} />);
    expect(expected.html()).toContain('Artist 1');
  });
});

function song() {
  return { id: 1, title: 'Title 1', artist: 'Artist 1', album: 'Album 1' };
}
