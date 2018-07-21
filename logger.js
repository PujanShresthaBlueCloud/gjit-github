//(function (exports, require, module, __filename, __dirname) {}// this module wrapper function default
const EventEmitter = require('events');
var url='http://abirnacuriohouse.com/login';
class Logger extends EventEmitter {
  log(message){
    // Send a http request
    console.log('hello' + message);
    // raised an event
    this.emit('messageLogged', {id: 1, url: 'http://'});
  }
}
  //log('same file');
  //console.log(__filename);
  //console.log(__dirname);

//module.exports.log = log; // passing the object to another file
//module.exports.endPointUrl = url;
module.exports = Logger; // passing just one function to another file

