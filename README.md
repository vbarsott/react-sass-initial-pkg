# React App

## Initialize react:
- Install initial react package: `npx create-react-app react-app`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)
- Run react: `npm start`

## Install modules:
- Install the router: `npm install react-router-dom`
- Install react icons: `npm install react-icons`

## Install sass:
- Install sass: `npm install --save-dev sass`
- Create directories inside src folder:
  - styles
    - css
    - scss
      - components
      - utilities
- Import inside App.js: `import './styles/scss/styles.scss';`
- Include script on package.json:
  `"scripts": {
    "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map"
  }`
- Run sass: `npm run sass`

## Setup backend - json-server:
- Stop react if running (npm start)
- Install: `npm i json-server`
- Include script on package.json:
  `"scripts": {
      "server": "json-server --watch db.json --port 8000" (could be 5000, etc)
    }`
- Run the server: `npm run server`
- db.json file will be generated
- Run again react dev server: `npm start`
- Replace the data inside db.json (put our own data)