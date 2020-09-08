// var localTutor=require('./NodeTutorial');
// localTutor.NodeTutorial();
// localTutor.NodeTutorial.pTutor();

// const fs = require('fs');


// const userName = 'Chaim';

// fs.writeFile('user-data.txt', 'Name: '+ userName, (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('Wrote File')
// })

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('incoming requests')
  console.log(req.method, req.url)

  if (req.method === "POST") {
    let body = ''
    req.on('end', () => {
        console.log(body)
        res.end('got the post request')
    })
    
    req.on('data', (chunk)=> {
       body += chuck;
     } )
  } else {
    
  res.setHeader('Content-Type', 'text/html');
  res.end('<form method="POST><input type="text" name="username"><button type="submit">New User</button></form>')
  }
});

server.listen(5000);