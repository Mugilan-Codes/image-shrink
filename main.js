const { app, BrowserWindow } = require('electron');

let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 500,
    height: 600,
  });

  mainWindow.loadURL('https://twitter.com');
};

app.on('ready', createMainWindow);
