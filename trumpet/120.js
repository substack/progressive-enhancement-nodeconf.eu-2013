var trumpet = require('trumpet');
var fs = require('fs');

var tr = trumpet();
fs.createWriteStream('070_index.html')
    .pipe(tr).pipe(process.stdout)
;

var robot = trumpet();
robot.createWriteStream('.name').end('BOLTY');
robot.createWriteStream('.desc').end('unsuspecting usual suspect');

fs.createReadStream('080_robot.html').pipe(robot);
