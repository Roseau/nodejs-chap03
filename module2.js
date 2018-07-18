var A = `Value A from module 2`;
var B = `Value B from module 2`;
var m1 = require('./module1');
util.log(`A = `+A+` || `+` B=`+B+` || `+' values= '+util.inspect(m1.values()));