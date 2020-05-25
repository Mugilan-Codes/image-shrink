const { app, BrowserWindow } = require('electron');

let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 500,
    height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  //   mainWindow.loadFile('./app/index.html');
};

app.on('ready', createMainWindow);
