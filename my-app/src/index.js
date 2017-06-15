import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import FiendCleanerGame from './FiendCleanerGame'
import ReactMaze from './ReactMaze'

new FiendCleanerGame((board) =>{
  ReactDOM.render(<ReactMaze board={board} />, document.getElementById('root'));
})
registerServiceWorker();
