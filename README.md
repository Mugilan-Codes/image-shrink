# Image Shrink

A desktop app built on Electron for minimizing images

[![time tracker](https://wakatime.com/badge/github/Mugilan-Codes/image-shrink.svg)](https://wakatime.com/badge/github/Mugilan-Codes/image-shrink)

## Usage

### Modify main.js for Development Mode

```
process.env.NODE_ENV = 'development';
```

### Install Dependencies

```
npm install
```

### Run

```
npm start
npm run dev (with Nodemon)
```

### Modify main.js to Production Mode before Packaging

```
process.env.NODE_ENV = 'production';
```

### Package

```
npm run package-mac
npm run package-win
npm run package-linux
```

## Logs

- macOS: ~/Library/Logs/imageshrink/main.log
- Windows: %USERPROFILE%\AppData\Roaming\imageshrink\logs\main.log
- Linux: ~/.config/imageshrink/logs/main.log

## TODO

- Let User choose their own output path
- Send Data from IPCMain to IPCRenderer
- Rename the file
- Replace or Keep a copy option
- Create Constants for Values such as Prod and Dev
- Distribute the App

## Packages Used

> DevDependencies (npm i -D \<package-name>)

- [Electron](https://www.npmjs.com/package/electron)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Packager](https://www.npmjs.com/package/electron-packager)

> Dependecies (npm i \<package-name>)

- [Imagemin](https://www.npmjs.com/package/imagemin)
- [JPEG Plugin](https://www.npmjs.com/package/imagemin-mozjpeg)
- [PNG Plugin](https://www.npmjs.com/package/imagemin-pngquant)
- [Slash](https://www.npmjs.com/package/slash)
- [Logger](https://www.npmjs.com/package/electron-log)

## Resources

- [Electron JS](https://www.electronjs.org/)
- [Docs](https://www.electronjs.org/docs)
- [Brad's ImageShrink App](https://github.com/bradtraversy/electron-course-files/tree/master/image-shrink)
- [Materialize CSS](https://materializecss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Electron Packager](https://www.christianengvall.se/electron-packager-tutorial/)
