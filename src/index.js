const messages = require('./messages.js');
import Button from './button';
import kitten from './image';

const newMessage = () => (`
  <p>
    ${kitten}
    ${messages.hi} ${messages.event} 1
  </p>`);
//const newMessage = () => (Button.button);

const app = document.getElementById('app');
app.innerHTML = newMessage();

if(module.hot) {
  module.hot.accept();
}
