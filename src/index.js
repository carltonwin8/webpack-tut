const messages = require('./messages.js');
/*
import Button from './button';
import kitten from './image';
import google from './google';
const newMessage = () => (`
  <p>
    ${kitten}
    ${google}
    ${messages.hi} ${messages.event} 1
  </p>`);
//const newMessage = () => (Button.button);
*/
import { multiply } from './mathStuff';
const newMessage = () => (multiply(2,3));

const app = document.getElementById('app');
app.innerHTML = newMessage();

if(module.hot) {
  module.hot.accept();
}
