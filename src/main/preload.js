const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('files', {
  list: () => ipcRenderer.invoke('files:list')
})