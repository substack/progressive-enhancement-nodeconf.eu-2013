var hyperkey = require('hyperkey');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/010_message.html');

module.exports = function () {
    return hyperkey(html, function (row) {
        // ...
    });
};
