import React from 'react';
import { shallow } from 'enzyme';

import PlayQueue from './index';

describe('Play Queue List', () => {
  it('should handle empty play queue', () => {
    const expected = shallow(<PlayQueue songs={[]} />);
    expect(expected.html()).toContain('No musics to be player - sad');
  });

  it('should render the list of next songs', () => {
    const expected = shallow(<PlayQueue songs={songs()} />);
    expect(expected.at(0).length).toBe(3);
  });

  it('should display artist name', () => {
    const expected = shallow(<PlayQueue songs={songs()} />);
    expect(
      expected
        .at(0)
        .at(0)
        .html()
    ).toContain('Artist 1');
  });

  it('should trigger callback when music is selected', () => {
    const mockCallback = jest.fn();
    const expected = shallow(
      <PlayQueue songs={songs()} onMusicSelected={mockCallback} />
    );
    expected
      .at(0)
      .at(0)
      .simulate('click');

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});

function songs() {
  return [
    { id: 1, title: 'Title 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, title: 'Title 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, title: 'Title 3', artist: 'Artist 3', album: 'Album 3' }
  ];
}
