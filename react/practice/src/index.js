// index.js is the entry point of the application. 
// It is the first file that is executed when the application starts.
// It is the file that is responsible for rendering the root component of the application.
/*
React developer tools chrome plugin
thunder client
react ES7
nodeJS

reactjs.org/docs

in terminal: npx create-react-app practice
new terminal-->cd practice-->`npm start` or `yarn start` to start the app for development
or `npm run build` or `yarn build` to build the app for production

http://getbootstrap.com/docs/5.1/getting-started/introduction/  
copy the bundle part JS to index.html and copy css part into index.html before <head> tag
find component HTML in bootstrap and copy to App.js replace the HTML in App.js: class-->className, for-->htmlFor, href="#"--> href="/", hr--> add / <hr className="dropdown-divider"/>, for input tag add / at then end etc.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
