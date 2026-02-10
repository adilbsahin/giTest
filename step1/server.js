const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream("index.html").pipe(res);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on http://localhost:3000");
});
