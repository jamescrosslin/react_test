import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
});

// and load the index.html of the app.
mainWindow.loadURL(`file://${__dirname}/index.html`);

app.on('ready', createWindow);
