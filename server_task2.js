// Import the http module
const http = require('http');

// Create a new web server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL of the current request
  if (req.url === '/') {
    // Root route
    res.writeHead(200);
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about') {
    // About route
    res.writeHead(200);
    res.end('<html><body><h1>This is the About Page.</h1></body></html>');
  } else if (req.url === '/contact') {
    // Contact route
    res.writeHead(200);
    res.end('This is the Contact Page.');
  } else {
    // Invalid request
    res.writeHead(404);
    res.end('Invalid Request!');
  }
});

// Listen on port 5001
server.listen(5001, () => {
  console.log('The NodeJS server on port 5001 is now running…');
});
