// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './style';

let root;
function init() {
	let App = require('./components/app').default;
	root = render(<App />, document.body, root);
}

if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(function(registration) {
          console.log('Service Worker registration successful with scope: ',
          registration.scope);
        })
        .catch(function(err) {
          console.log('Service Worker registration failed: ', err);
        });
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
