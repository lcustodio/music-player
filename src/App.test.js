import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('Play Queue Current Song', () => {
//   it('should highlight current song', () => {
//     const expected = shallow(<PlayQueue songs={songs()} currentSong={2} />);
//     expect(expected.find(CurrentSong)).toContain('Artist 2');
//   });
// });
