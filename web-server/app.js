// /web-server/app.js

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');

const app = http.createServer((req, res) => {
    console.log("Message 요청 received!");
    res.writeHead(httpStatus.OK, { // 200 code.
        'Content-Type': "text/html"
    });
    let resMsg = "<h1>Hello, DJU SEC Class!</h1>";
    res.write(resMsg);
    res.end();
    console.log(`Sent: ${resMsg}`);
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
}

console.log(`Server on port: http://localhost:${port}`);