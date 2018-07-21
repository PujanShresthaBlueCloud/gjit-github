const http = require('http');
const server = http.createServer((req, res) =>{
    if (req.url ==='/'){
          res.write('hello world');
          res.end();
      }
  if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
      }

});
server.listen(3000);
console.log('listening on port 3000..');
/*const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();
// register a listener
logger.on('messageLogged', (arg) =>{
  console.log('Lister called', arg);
});

logger.log('message');
*/
/*const fs = require('fs');
//const files = fs.readdirSync('./');
 fs.readdir('./', function(err, files){
  if(err) console.log('Error', err);
  else console.log('Result', files);
});
//console.log(files);
*/
/*const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os =  require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('total memory'+totalMemory);
console.log('free memory'+freeMemory);
// template string
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

*/

//const logger = require('./logger');// getting whole file module obj
//log('pujan');
//console.log(logger);
//logger.log('pujan');
//const log = require('./logger')// getting a log function of  file
//log('pujan shrestha');

//function sayHello(name){
//  console.log('hello' + name);
//}
//sayHello('Pujan');

//console.log(window);
//setTimeout();
//clearTimeout();
//setInterval();
//clearInterval();

//var message='';
//console.log(global.message);
//function hi(firstName){
//console.log('hi'+firstName);
//}
//hi('Pujan shrestha');
//console.log(module); // module of app.js

