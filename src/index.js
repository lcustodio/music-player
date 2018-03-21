import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import musics from './resources/music';

ReactDOM.render(<App musics={musics}/>, document.getElementById('root'));
