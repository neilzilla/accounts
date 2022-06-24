import BrowserWinHandler from './BrowserWinHandler'
import {ipcMain} from 'electron';
import fs from 'fs';
import path from 'path'

const winHandler = new BrowserWinHandler({
  height: 600,
  width: 1000,
  webPreferences: {
    preload: path.join(path.resolve(__dirname), 'preload.js'),
    contextIsolation: true
  },
})

winHandler.onCreated(_browserWindow => {

  // attach ipc functions
  ipcMain.handle('files:list', listFiles);

  winHandler.loadPage('/')
  // Or load custom url
  // _browserWindow.loadURL('https://google.com')
})

const listFiles = () => {
  return fs.readdirSync('./')
}



export default winHandler
