const { createServer } = require('http');
const next = require('next');

const routes = require('./routes');
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 8000;

const app = next({ dev: process.env.NODE_ENV !== 'production' });
app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) {
      throw err;
    }
    console.log('Ready on localhost:3000');
  });
});
