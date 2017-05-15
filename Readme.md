# TLytics

### Todo:
* Create smaller components (form, input) ✔︎
* Rename Error to Toast ✔︎
* Style Toasts out better
* Create navigation bar

### Changelog:
* Added OAuth
* Created Charts class
* Changed Error to Toast for more general usage

#### NPM Scripts:
```json
{
  "watch": "nodemon server.js --ignore public/ --exec babel-node",
  "assets": "webpack -w --display-max-modules 0",
  "start": "concurrently 'npm run watch' 'npm run assets' --names '💻,📦' --prefix name",
  "build": "webpack -p"
}
```