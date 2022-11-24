// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log('request made');
//     res.setHeader('Content-Type', 'text/html');

//     let path = './';
//     switch(req.url) {
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/contact-me':
//             path += 'contact-me.html';
//             res.statusCode = 200;
//             break;
//         case '/contact':
//             res.setHeader('Location', '/contact-me');
//             res.statusCode = 301;
//             res.end();
//             break;
//         default:
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.end(data);
//         }
//     });
// });

// server.listen(8080, 'localhost', () => {
//     console.log('listening for requests on port 3000');
// });

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log('Request was made');
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        case '/contact':
            res.setHeader('Location', '/contact-me');
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(8080, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

// mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
// { "_id" : "Shared room" }
// { "_id" : "Private room" }
// { "_id" : "Entire home/apt" }