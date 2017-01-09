const messages = require('./messages.js');
import Button from './button';

//const newMessage = () => (`<p>${messages.hi} ${messages.event} 1</p>`);
const newMessage = () => (Button.button);

const app = document.getElementById('app');
app.innerHTML = newMessage();
Button.attachEl();

if(module.hot) {
  module.hot.accept();
}
