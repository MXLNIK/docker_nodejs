const http = require("http");

const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <title>Docker Node.js</title>
        </head>
        <body>
            <h1>NODE.JS READY</h1>
            <p>Node.js Docker container is working!</p>
        </body>
        </html>
    `);
});

server.listen(port, "0.0.0.0", () => {
    console.log("Server started on port " + port);
});