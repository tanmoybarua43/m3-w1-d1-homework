// Import the http module
const http = require('http');

// Create a new web server
const server = http.createServer((req, res) => {
  // Check the URL of the current request
  if (req.url === '/') {
    // Root route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1 style="color: red;">Home Page</h1> <br> <p>Welcome to home page</p></body></html>');
  } else if (req.url === '/about') {
    // About route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1 style="color: green;">About Page.</h1><br> <p>Welcome to about page</p></body></html>');
  } else if (req.url === '/contact') {
    // Contact route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1 style="color: blue;">Contact Page.</h1><br> <p>Welcome to contact page</p></body></html>');
  } else {
    // Invalid request
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Invalid Request!</h1></body></html>');
  }
});

// Listen on port 5001
server.listen(5001, () => {
  console.log('The NodeJS server on port 5001 is now running…');
});
