const messages = require('./messages.js');

const newMessage = () => (`<p>${messages.hi} ${messages.event}</p>`);

const app = document.getElementById('app');
app.innerHTML = newMessage();

if(module.hot) {
  module.hot.accept();
}
