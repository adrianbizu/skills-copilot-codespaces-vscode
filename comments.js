// Create web server with Express
// npm install express
const express = require('express');
const app = express();
const PORT = 3000;

// Create a middleware function that logs the request method and request path
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Create a middleware function that logs the request's body
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Create a middleware function that logs the request's query parameters
app.use((req, res, next) => {
  console.log(req.query);
  next();
});

// Create a middleware function that logs the request's parameters
app.use((req, res, next) => {
  console.log(req.params);
  next();
});

// Create a middleware function that logs the request's headers
app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

// Create a middleware function that logs the request's cookies
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

// Create a middleware function that logs the request's ip address
app.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// Create a middleware function that logs the request's protocol
app.use((req, res, next) => {
  console.log(req.protocol);
  next();
});

// Create a middleware function that logs the request's hostname
app.use((req, res, next) => {
  console.log(req.hostname);
  next();
});

// Create a middleware function that logs the request's path
app.use((req, res, next) => {
  console.log(req.path);
  next();
});

// Create a middleware function that logs the request's original url
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Create a middleware function that logs the request's xhr status
app.use((req, res, next) => {
  console.log(req.xhr);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
