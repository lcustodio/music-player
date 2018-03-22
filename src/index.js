import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import musics from './resources/music';

import 'normalize.css';

ReactDOM.render(<App musics={musics} />, document.getElementById('root'));
