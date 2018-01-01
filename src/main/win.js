const {BrowserWindow, app, ipcMain} = require('electron')
const path = require('path')

let win = {}
let mainWindow = null
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:12306` : `file://${__dirname}/index.html`
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 600,
    minHeight: 600,
    useContentSize: true,
    width: process.env.NODE_ENV === 'development' ? 1000 : 888,
    minWidth: 700,
    titleBarStyle: 'hidden',
    frame: false,
    show: true,
    webPreferences: {
      webSecurity: false
    }
  })

  mainWindow.loadURL(winURL)

  // if (process.env.NODE_ENV === 'development') {
  //   mainWindow.openDevTools();
  // }

  // mainWindow.webContents.on('did-finish-load', function () {
  //   mainWindow.show();
  //   mainWindow.focus();
  // });

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

win.open = function () {
  if (mainWindow === null) {
    createWindow()
  } else {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    mainWindow.focus()
  }
}

ipcMain.on('WIN-Close', function () {
  if (mainWindow) {
    mainWindow.close()
  }
  app.quit()
})

ipcMain.on('WIN-Minimize', function () {
  if (mainWindow) {
    mainWindow.minimize()
  }
})

module.exports = win
