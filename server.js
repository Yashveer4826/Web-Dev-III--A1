const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request received:", req.url);

    if (req.url === "/") {
        res.end("Welcome to Smart Utility Toolkit");
    } 
    else if (req.url === "/about") {
        res.end("About Page");
    } 
    else if (req.url === "/contact") {
        res.end("Contact Page");
    } 
    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});