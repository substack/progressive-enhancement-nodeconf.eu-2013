var level = require('level');
var sub = require('level-sublevel');
var db = sub(level('/tmp/assoc.db', { valueEncoding: 'json' }));

