var level = require('level');
var sub = require('level-sublevel');
var db = sub(level('/tmp/assoc.db', { valueEncoding: 'json' }));

var assoc = require('level-assoc')(db);
assoc.add('hackerspace')
    .hasMany('hackers', [ 'type', 'hacker' ])
    .hasMany('tools', [ 'type', 'tool' ])
;
