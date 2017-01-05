const messages = require('./messages.js');
const app = document.getElementById('app');
app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>';

if(module.hot) {
  module.hot.accept();
}
